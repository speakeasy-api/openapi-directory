import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import homedirectorymapentry as shared_homedirectorymapentry
from ..shared import homedirectorytype_enum as shared_homedirectorytype_enum
from ..shared import posixprofile as shared_posixprofile


@dataclass_json
@dataclasses.dataclass
class UpdateUserRequest:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    home_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_mappings: Optional[list[shared_homedirectorymapentry.HomeDirectoryMapEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryMappings') }})
    home_directory_type: Optional[shared_homedirectorytype_enum.HomeDirectoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    posix_profile: Optional[shared_posixprofile.PosixProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

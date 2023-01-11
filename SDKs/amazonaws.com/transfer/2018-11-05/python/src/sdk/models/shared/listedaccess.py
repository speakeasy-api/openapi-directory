import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import homedirectorytype_enum as shared_homedirectorytype_enum


@dataclass_json
@dataclasses.dataclass
class ListedAccess:
    r"""ListedAccess
    Lists the properties for one or more specified associated accesses.
    """
    
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    home_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_type: Optional[shared_homedirectorytype_enum.HomeDirectoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationFsxWindowsRequest:
    fsx_filesystem_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FsxFilesystemArn') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    security_group_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupArns') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

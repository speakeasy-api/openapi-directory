import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharedimagepermissions as shared_sharedimagepermissions


@dataclass_json
@dataclasses.dataclass
class DescribeImagePermissionsResult:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    shared_image_permissions_list: Optional[list[shared_sharedimagepermissions.SharedImagePermissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedImagePermissionsList') }})
    

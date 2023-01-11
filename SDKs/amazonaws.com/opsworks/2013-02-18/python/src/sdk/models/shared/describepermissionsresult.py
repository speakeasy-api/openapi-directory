import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission as shared_permission


@dataclass_json
@dataclasses.dataclass
class DescribePermissionsResult:
    r"""DescribePermissionsResult
    Contains the response to a <code>DescribePermissions</code> request.
    """
    
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    

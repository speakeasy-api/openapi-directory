import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailsmap as shared_detailsmap
from ..shared import permission_enum as shared_permission_enum
from ..shared import datalakeprincipal as shared_datalakeprincipal
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class PrincipalResourcePermissions:
    r"""PrincipalResourcePermissions
    The permissions granted or revoked on a resource.
    """
    
    additional_details: Optional[shared_detailsmap.DetailsMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalDetails') }})
    permissions: Optional[list[shared_permission_enum.PermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    permissions_with_grant_option: Optional[list[shared_permission_enum.PermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsWithGrantOption') }})
    principal: Optional[shared_datalakeprincipal.DataLakePrincipal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    

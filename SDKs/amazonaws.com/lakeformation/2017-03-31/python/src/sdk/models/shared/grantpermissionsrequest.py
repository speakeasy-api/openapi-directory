import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission_enum as shared_permission_enum
from ..shared import datalakeprincipal as shared_datalakeprincipal
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class GrantPermissionsRequest:
    permissions: list[shared_permission_enum.PermissionEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    principal: shared_datalakeprincipal.DataLakePrincipal = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: shared_resource.Resource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    permissions_with_grant_option: Optional[list[shared_permission_enum.PermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsWithGrantOption') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datalakeprincipal as shared_datalakeprincipal
from ..shared import resource as shared_resource
from ..shared import datalakeresourcetype_enum as shared_datalakeresourcetype_enum


@dataclass_json
@dataclasses.dataclass
class ListPermissionsRequest:
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    principal: Optional[shared_datalakeprincipal.DataLakePrincipal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    resource_type: Optional[shared_datalakeresourcetype_enum.DataLakeResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScimGroupListEnterpriseResourcesMembers:
    dollar_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    display: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimGroupListEnterpriseResourcesMeta:
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimGroupListEnterpriseResources:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    members: Optional[list[ScimGroupListEnterpriseResourcesMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    meta: Optional[ScimGroupListEnterpriseResourcesMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimGroupListEnterprise:
    resources: list[ScimGroupListEnterpriseResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    items_per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    start_index: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    

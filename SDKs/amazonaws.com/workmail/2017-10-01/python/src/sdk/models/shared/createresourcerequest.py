import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class CreateResourceRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

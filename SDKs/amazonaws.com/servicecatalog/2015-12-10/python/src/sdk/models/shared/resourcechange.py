import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeaction_enum as shared_changeaction_enum
from ..shared import resourcechangedetail as shared_resourcechangedetail
from ..shared import replacement_enum as shared_replacement_enum
from ..shared import resourceattribute_enum as shared_resourceattribute_enum


@dataclass_json
@dataclasses.dataclass
class ResourceChange:
    r"""ResourceChange
    Information about a resource change that will occur when a plan is executed.
    """
    
    action: Optional[shared_changeaction_enum.ChangeActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    details: Optional[list[shared_resourcechangedetail.ResourceChangeDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    logical_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogicalResourceId') }})
    physical_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalResourceId') }})
    replacement: Optional[shared_replacement_enum.ReplacementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replacement') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    scope: Optional[list[shared_resourceattribute_enum.ResourceAttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scope') }})
    

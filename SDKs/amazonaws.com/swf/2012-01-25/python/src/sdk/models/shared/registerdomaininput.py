import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetag as shared_resourcetag


@dataclass_json
@dataclasses.dataclass
class RegisterDomainInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    workflow_execution_retention_period_in_days: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecutionRetentionPeriodInDays') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[list[shared_resourcetag.ResourceTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

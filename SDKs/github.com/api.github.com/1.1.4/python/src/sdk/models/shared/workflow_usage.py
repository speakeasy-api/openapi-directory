import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkflowUsageBillableMacos:
    total_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowUsageBillableUbuntu:
    total_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowUsageBillableWindows:
    total_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowUsageBillable:
    macos: Optional[WorkflowUsageBillableMacos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACOS') }})
    ubuntu: Optional[WorkflowUsageBillableUbuntu] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UBUNTU') }})
    windows: Optional[WorkflowUsageBillableWindows] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WINDOWS') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowUsage:
    r"""WorkflowUsage
    Workflow Usage
    """
    
    billable: WorkflowUsageBillable = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billable') }})
    

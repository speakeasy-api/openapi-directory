import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkflowRunUsageBillableMacos:
    jobs: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    total_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunUsageBillableUbuntu:
    jobs: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    total_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunUsageBillableWindows:
    jobs: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    total_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunUsageBillable:
    macos: Optional[WorkflowRunUsageBillableMacos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACOS') }})
    ubuntu: Optional[WorkflowRunUsageBillableUbuntu] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UBUNTU') }})
    windows: Optional[WorkflowRunUsageBillableWindows] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WINDOWS') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunUsage:
    r"""WorkflowRunUsage
    Workflow Run Usage
    """
    
    billable: WorkflowRunUsageBillable = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billable') }})
    run_duration_ms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_duration_ms') }})
    

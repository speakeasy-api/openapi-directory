import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class DescribeWorkflowTypeInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    

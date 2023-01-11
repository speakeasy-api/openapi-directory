import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AutomationExecution:
    r"""AutomationExecution
    The Systems Manager automation document process to start as the runbook at the beginning of the incident.
    """
    
    ssm_execution_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmExecutionArn') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexecutionstatus as shared_remediationexecutionstatus


@dataclass_json
@dataclasses.dataclass
class DescribeRemediationExecutionStatusResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    remediation_execution_statuses: Optional[list[shared_remediationexecutionstatus.RemediationExecutionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationExecutionStatuses') }})
    

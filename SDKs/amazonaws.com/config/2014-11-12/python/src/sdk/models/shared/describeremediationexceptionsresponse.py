import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexception as shared_remediationexception


@dataclass_json
@dataclasses.dataclass
class DescribeRemediationExceptionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    remediation_exceptions: Optional[list[shared_remediationexception.RemediationException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationExceptions') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnprocessedStatistics:
    r"""UnprocessedStatistics
    Sampling statistics from a call to <a href=\"https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html\">GetSamplingTargets</a> that X-Ray could not process.
    """
    
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    rule_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    

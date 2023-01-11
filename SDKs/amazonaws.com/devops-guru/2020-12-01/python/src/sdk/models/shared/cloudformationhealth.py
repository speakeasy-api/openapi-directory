import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insighthealth as shared_insighthealth


@dataclass_json
@dataclasses.dataclass
class CloudFormationHealth:
    r"""CloudFormationHealth
     Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
    """
    
    insight: Optional[shared_insighthealth.InsightHealth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Insight') }})
    stack_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import condition as shared_condition
from ..shared import waittime as shared_waittime


@dataclass_json
@dataclasses.dataclass
class ConditionalSplitActivity:
    r"""ConditionalSplitActivity
    <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href=\"https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html\">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
    """
    
    condition: Optional[shared_condition.Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    evaluation_wait_time: Optional[shared_waittime.WaitTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationWaitTime') }})
    false_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FalseActivity') }})
    true_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrueActivity') }})
    

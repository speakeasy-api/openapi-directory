import dataclasses
from typing import Optional
from enum import Enum
from ..shared import stopscope_enum as shared_stopscope_enum


@dataclasses.dataclass
class StopAction:
    r"""StopAction
    <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    scope: shared_stopscope_enum.StopScopeEnum = dataclasses.field()
    topic_arn: Optional[str] = dataclasses.field(default=None)
    

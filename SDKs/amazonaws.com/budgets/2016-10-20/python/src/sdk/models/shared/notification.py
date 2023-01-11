import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import notificationstate_enum as shared_notificationstate_enum
from ..shared import notificationtype_enum as shared_notificationtype_enum
from ..shared import thresholdtype_enum as shared_thresholdtype_enum


@dataclass_json
@dataclasses.dataclass
class Notification:
    r"""Notification
    <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
    """
    
    comparison_operator: shared_comparisonoperator_enum.ComparisonOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    notification_type: shared_notificationtype_enum.NotificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    threshold: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    notification_state: Optional[shared_notificationstate_enum.NotificationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationState') }})
    threshold_type: Optional[shared_thresholdtype_enum.ThresholdTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThresholdType') }})
    

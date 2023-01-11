import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationtargetactions as shared_notificationtargetactions
from ..shared import emailconfiguration as shared_emailconfiguration
from ..shared import smsconfiguration as shared_smsconfiguration


@dataclass_json
@dataclasses.dataclass
class NotificationAction:
    r"""NotificationAction
    Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
    """
    
    action: shared_notificationtargetactions.NotificationTargetActions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    email_configurations: Optional[list[shared_emailconfiguration.EmailConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailConfigurations') }})
    sms_configurations: Optional[list[shared_smsconfiguration.SmsConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsConfigurations') }})
    

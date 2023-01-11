import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionthreshold as shared_actionthreshold
from ..shared import approvalmodel_enum as shared_approvalmodel_enum
from ..shared import definition as shared_definition
from ..shared import notificationtype_enum as shared_notificationtype_enum
from ..shared import subscriber as shared_subscriber


@dataclass_json
@dataclasses.dataclass
class UpdateBudgetActionRequest:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    action_threshold: Optional[shared_actionthreshold.ActionThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThreshold') }})
    approval_model: Optional[shared_approvalmodel_enum.ApprovalModelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalModel') }})
    definition: Optional[shared_definition.Definition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    notification_type: Optional[shared_notificationtype_enum.NotificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    subscribers: Optional[list[shared_subscriber.Subscriber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    

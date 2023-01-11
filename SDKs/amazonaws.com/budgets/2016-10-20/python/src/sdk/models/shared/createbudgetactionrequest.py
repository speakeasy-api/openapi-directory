import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionthreshold as shared_actionthreshold
from ..shared import actiontype_enum as shared_actiontype_enum
from ..shared import approvalmodel_enum as shared_approvalmodel_enum
from ..shared import definition as shared_definition
from ..shared import notificationtype_enum as shared_notificationtype_enum
from ..shared import subscriber as shared_subscriber


@dataclass_json
@dataclasses.dataclass
class CreateBudgetActionRequest:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_threshold: shared_actionthreshold.ActionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThreshold') }})
    action_type: shared_actiontype_enum.ActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    approval_model: shared_approvalmodel_enum.ApprovalModelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalModel') }})
    budget_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    definition: shared_definition.Definition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    notification_type: shared_notificationtype_enum.NotificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    subscribers: list[shared_subscriber.Subscriber] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    

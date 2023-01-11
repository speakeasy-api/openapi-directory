import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorenew_enum as shared_autorenew_enum
from ..shared import limit as shared_limit
from ..shared import proactiveengagementstatus_enum as shared_proactiveengagementstatus_enum
from ..shared import subscriptionlimits as shared_subscriptionlimits


@dataclass_json
@dataclasses.dataclass
class Subscription:
    r"""Subscription
    Information about the Shield Advanced subscription for an account.
    """
    
    subscription_limits: shared_subscriptionlimits.SubscriptionLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionLimits') }})
    auto_renew: Optional[shared_autorenew_enum.AutoRenewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limits: Optional[list[shared_limit.Limit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    proactive_engagement_status: Optional[shared_proactiveengagementstatus_enum.ProactiveEngagementStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveEngagementStatus') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionArn') }})
    time_commitment_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeCommitmentInSeconds') }})
    

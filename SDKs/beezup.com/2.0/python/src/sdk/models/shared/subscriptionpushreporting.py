import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclass_json
@dataclasses.dataclass
class SubscriptionPushReporting:
    r"""SubscriptionPushReporting
    The subscription push reporting
    """
    
    duration: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    last_order_modification_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastOrderModificationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCount') }})
    subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    succeed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeed') }})
    error_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    http_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    max_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryCount') }})
    next_scheduled_retry_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextScheduledRetryUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    request_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestUri') }})
    response_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseUri') }})
    retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryCount') }})
    

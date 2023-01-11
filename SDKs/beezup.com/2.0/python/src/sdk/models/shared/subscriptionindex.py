import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumptionavailabilitystatus_enum as shared_consumptionavailabilitystatus_enum
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import subscriptionlinks as shared_subscriptionlinks
from ..shared import subscriptionstatus_enum as shared_subscriptionstatus_enum


@dataclass_json
@dataclasses.dataclass
class SubscriptionIndex:
    r"""SubscriptionIndex
    The subscription definition
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant_application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantApplicationName') }})
    merchant_application_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantApplicationVersion') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: shared_subscriptionstatus_enum.SubscriptionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    consumer_health_status: Optional[shared_consumptionavailabilitystatus_enum.ConsumptionAvailabilityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerHealthStatus') }})
    consumer_last_request_sent_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerLastRequestSentUri') }})
    consumer_unvailable_since_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerUnvailableSinceUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_error_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorMessage') }})
    last_order_pushed_modification_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastOrderPushedModificationUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_retry_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRetryUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_successful_order_pushed_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSuccessfulOrderPushedUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[shared_subscriptionlinks.SubscriptionLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    max_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryCount') }})
    merchant_email_alert: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantEmailAlert') }})
    next_scheduled_retry_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextScheduledRetryUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recover_begin_period_order_last_modification_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoverBeginPeriodOrderLastModificationUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recover_end_period_order_last_modification_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoverEndPeriodOrderLastModificationUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryCount') }})
    

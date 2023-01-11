import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookeventtype_enum as shared_webhookeventtype_enum
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class UpdateWebhookRequest:
    delivery_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[list[shared_webhookeventtype_enum.WebhookEventTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

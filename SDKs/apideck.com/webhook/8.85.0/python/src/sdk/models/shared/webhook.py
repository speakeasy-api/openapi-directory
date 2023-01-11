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
from ..shared import unifiedapiid_enum as shared_unifiedapiid_enum


@dataclass_json
@dataclasses.dataclass
class Webhook:
    delivery_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    events: list[shared_webhookeventtype_enum.WebhookEventTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    execute_base_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execute_base_url') }})
    status: shared_status_enum.StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    unified_api: shared_unifiedapiid_enum.UnifiedAPIIDEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

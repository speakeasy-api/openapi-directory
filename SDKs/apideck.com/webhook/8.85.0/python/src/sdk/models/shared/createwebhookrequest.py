import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookeventtype_enum as shared_webhookeventtype_enum
from ..shared import status_enum as shared_status_enum
from ..shared import unifiedapiid_enum as shared_unifiedapiid_enum


@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequest:
    delivery_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    events: list[shared_webhookeventtype_enum.WebhookEventTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    status: shared_status_enum.StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    unified_api: shared_unifiedapiid_enum.UnifiedAPIIDEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

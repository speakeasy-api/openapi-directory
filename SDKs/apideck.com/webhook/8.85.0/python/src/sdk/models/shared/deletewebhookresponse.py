import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class DeleteWebhookResponse:
    data: shared_webhook.Webhook = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    

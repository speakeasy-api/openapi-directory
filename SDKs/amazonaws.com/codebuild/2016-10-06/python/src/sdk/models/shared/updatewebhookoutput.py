import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class UpdateWebhookOutput:
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

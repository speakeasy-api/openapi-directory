import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class UpdateWebhookResult:
    r"""UpdateWebhookResult
     The result structure for the update webhook request. 
    """
    
    webhook: shared_webhook.Webhook = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

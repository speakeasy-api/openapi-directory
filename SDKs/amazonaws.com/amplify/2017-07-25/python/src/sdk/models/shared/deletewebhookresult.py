import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class DeleteWebhookResult:
    r"""DeleteWebhookResult
     The result structure for the delete webhook request. 
    """
    
    webhook: shared_webhook.Webhook = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class ListWebhooksResult:
    r"""ListWebhooksResult
     The result structure for the list webhooks request. 
    """
    
    webhooks: list[shared_webhook.Webhook] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

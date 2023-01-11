import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listwebhookitem as shared_listwebhookitem


@dataclass_json
@dataclasses.dataclass
class ListWebhooksOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    webhooks: Optional[list[shared_listwebhookitem.ListWebhookItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

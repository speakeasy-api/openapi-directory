import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import webhookdefinition as shared_webhookdefinition


@dataclass_json
@dataclasses.dataclass
class PutWebhookInput:
    webhook: shared_webhookdefinition.WebhookDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

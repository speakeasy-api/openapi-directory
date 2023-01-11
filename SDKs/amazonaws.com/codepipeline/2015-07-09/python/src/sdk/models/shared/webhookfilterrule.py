import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WebhookFilterRule:
    r"""WebhookFilterRule
    The event criteria that specify when a webhook notification is sent to your URL.
    """
    
    json_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonPath') }})
    match_equals: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchEquals') }})
    

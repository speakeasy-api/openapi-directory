import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookfiltertype_enum as shared_webhookfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class WebhookFilter:
    r"""WebhookFilter
     A filter used to determine which webhooks trigger a build. 
    """
    
    pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    type: shared_webhookfiltertype_enum.WebhookFilterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    exclude_matched_pattern: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeMatchedPattern') }})
    

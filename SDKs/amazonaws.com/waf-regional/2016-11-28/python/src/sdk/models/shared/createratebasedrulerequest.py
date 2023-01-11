import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratekey_enum as shared_ratekey_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateRateBasedRuleRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_key: shared_ratekey_enum.RateKeyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateKey') }})
    rate_limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateLimit') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

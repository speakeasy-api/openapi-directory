import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wafaction as shared_wafaction
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateWebACLRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    default_action: shared_wafaction.WafAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

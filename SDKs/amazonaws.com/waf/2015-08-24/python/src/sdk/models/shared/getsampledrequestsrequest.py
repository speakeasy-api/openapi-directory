import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timewindow as shared_timewindow


@dataclass_json
@dataclasses.dataclass
class GetSampledRequestsRequest:
    max_items: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxItems') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    time_window: shared_timewindow.TimeWindow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeWindow') }})
    web_acl_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclId') }})
    

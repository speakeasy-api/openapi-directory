import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proactiveinsight as shared_proactiveinsight
from ..shared import reactiveinsight as shared_reactiveinsight


@dataclass_json
@dataclasses.dataclass
class DescribeInsightResponse:
    proactive_insight: Optional[shared_proactiveinsight.ProactiveInsight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveInsight') }})
    reactive_insight: Optional[shared_reactiveinsight.ReactiveInsight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveInsight') }})
    

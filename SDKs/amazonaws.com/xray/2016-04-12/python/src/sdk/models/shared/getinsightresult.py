import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insight as shared_insight


@dataclass_json
@dataclasses.dataclass
class GetInsightResult:
    insight: Optional[shared_insight.Insight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Insight') }})
    

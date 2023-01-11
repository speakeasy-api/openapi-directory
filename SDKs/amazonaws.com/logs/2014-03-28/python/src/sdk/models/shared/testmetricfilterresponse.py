import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricfiltermatchrecord as shared_metricfiltermatchrecord


@dataclass_json
@dataclasses.dataclass
class TestMetricFilterResponse:
    matches: Optional[list[shared_metricfiltermatchrecord.MetricFilterMatchRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    

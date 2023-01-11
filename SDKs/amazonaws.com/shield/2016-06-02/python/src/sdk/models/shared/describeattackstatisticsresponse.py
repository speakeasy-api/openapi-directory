import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attackstatisticsdataitem as shared_attackstatisticsdataitem
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class DescribeAttackStatisticsResponse:
    data_items: list[shared_attackstatisticsdataitem.AttackStatisticsDataItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataItems') }})
    time_range: shared_timerange.TimeRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeRange') }})
    

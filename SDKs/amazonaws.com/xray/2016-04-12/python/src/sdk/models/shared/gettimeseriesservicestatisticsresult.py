import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeseriesservicestatistics as shared_timeseriesservicestatistics


@dataclass_json
@dataclasses.dataclass
class GetTimeSeriesServiceStatisticsResult:
    contains_old_group_versions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainsOldGroupVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    time_series_service_statistics: Optional[list[shared_timeseriesservicestatistics.TimeSeriesServiceStatistics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesServiceStatistics') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forecastexportjobsummary as shared_forecastexportjobsummary


@dataclass_json
@dataclasses.dataclass
class ListForecastExportJobsResponse:
    forecast_export_jobs: Optional[list[shared_forecastexportjobsummary.ForecastExportJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastExportJobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

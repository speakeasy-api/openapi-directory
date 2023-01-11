import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import predictorbacktestexportjobsummary as shared_predictorbacktestexportjobsummary


@dataclass_json
@dataclasses.dataclass
class ListPredictorBacktestExportJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    predictor_backtest_export_jobs: Optional[list[shared_predictorbacktestexportjobsummary.PredictorBacktestExportJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobs') }})
    

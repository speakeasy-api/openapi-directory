import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datadestination as shared_datadestination
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePredictorBacktestExportJobRequest:
    destination: shared_datadestination.DataDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    predictor_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorArn') }})
    predictor_backtest_export_job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

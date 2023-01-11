import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analysisresult as shared_analysisresult


@dataclass_json
@dataclasses.dataclass
class GetDetectorModelAnalysisResultsResponse:
    analysis_results: Optional[list[shared_analysisresult.AnalysisResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

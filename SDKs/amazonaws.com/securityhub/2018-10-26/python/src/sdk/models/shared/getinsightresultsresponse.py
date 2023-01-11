import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightresults as shared_insightresults


@dataclass_json
@dataclasses.dataclass
class GetInsightResultsResponse:
    insight_results: shared_insightresults.InsightResults = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightResults') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeyexecutionmetricsresponse as shared_journeyexecutionmetricsresponse


@dataclass_json
@dataclasses.dataclass
class GetJourneyExecutionMetricsResponse:
    journey_execution_metrics_response: shared_journeyexecutionmetricsresponse.JourneyExecutionMetricsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyExecutionMetricsResponse') }})
    

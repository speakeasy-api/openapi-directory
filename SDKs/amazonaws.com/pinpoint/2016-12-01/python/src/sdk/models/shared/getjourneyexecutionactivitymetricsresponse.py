import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeyexecutionactivitymetricsresponse as shared_journeyexecutionactivitymetricsresponse


@dataclass_json
@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsResponse:
    journey_execution_activity_metrics_response: shared_journeyexecutionactivitymetricsresponse.JourneyExecutionActivityMetricsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyExecutionActivityMetricsResponse') }})
    

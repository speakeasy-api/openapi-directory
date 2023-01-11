import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JourneyExecutionActivityMetricsResponse:
    r"""JourneyExecutionActivityMetricsResponse
    Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
    """
    
    activity_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityType') }})
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    journey_activity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyActivityId') }})
    journey_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyId') }})
    last_evaluated_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedTime') }})
    metrics: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    

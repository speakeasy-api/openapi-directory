import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeAccountHealthResponse:
    metrics_analyzed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsAnalyzed') }})
    open_proactive_insights: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenProactiveInsights') }})
    open_reactive_insights: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenReactiveInsights') }})
    resource_hours: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceHours') }})
    

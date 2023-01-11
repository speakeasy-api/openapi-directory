import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insighttimerange as shared_insighttimerange
from ..shared import predictiontimerange as shared_predictiontimerange
from ..shared import resourcecollection as shared_resourcecollection
from ..shared import servicecollection as shared_servicecollection
from ..shared import insightseverity_enum as shared_insightseverity_enum
from ..shared import insightstatus_enum as shared_insightstatus_enum


@dataclass_json
@dataclasses.dataclass
class ProactiveInsightSummary:
    r"""ProactiveInsightSummary
    Details about a proactive insight. This object is returned by <code>DescribeInsight.</code> 
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    insight_time_range: Optional[shared_insighttimerange.InsightTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightTimeRange') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    prediction_time_range: Optional[shared_predictiontimerange.PredictionTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictionTimeRange') }})
    resource_collection: Optional[shared_resourcecollection.ResourceCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    service_collection: Optional[shared_servicecollection.ServiceCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCollection') }})
    severity: Optional[shared_insightseverity_enum.InsightSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    status: Optional[shared_insightstatus_enum.InsightStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

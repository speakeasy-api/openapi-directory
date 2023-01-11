import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalyreportedtimerange as shared_anomalyreportedtimerange
from ..shared import anomalytimerange as shared_anomalytimerange
from ..shared import resourcecollection as shared_resourcecollection
from ..shared import anomalyseverity_enum as shared_anomalyseverity_enum
from ..shared import anomalysourcedetails as shared_anomalysourcedetails
from ..shared import anomalystatus_enum as shared_anomalystatus_enum


@dataclass_json
@dataclasses.dataclass
class ReactiveAnomalySummary:
    r"""ReactiveAnomalySummary
    Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
    """
    
    anomaly_reported_time_range: Optional[shared_anomalyreportedtimerange.AnomalyReportedTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyReportedTimeRange') }})
    anomaly_time_range: Optional[shared_anomalytimerange.AnomalyTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyTimeRange') }})
    associated_insight_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedInsightId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    resource_collection: Optional[shared_resourcecollection.ResourceCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    severity: Optional[shared_anomalyseverity_enum.AnomalySeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    source_details: Optional[shared_anomalysourcedetails.AnomalySourceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    status: Optional[shared_anomalystatus_enum.AnomalyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightcategory_enum as shared_insightcategory_enum
from ..shared import requestimpactstatistics as shared_requestimpactstatistics
from ..shared import serviceid as shared_serviceid
from ..shared import insightstate_enum as shared_insightstate_enum
from ..shared import anomalousservice as shared_anomalousservice


@dataclass_json
@dataclasses.dataclass
class InsightSummary:
    r"""InsightSummary
    Information that describes an insight.
    """
    
    categories: Optional[list[shared_insightcategory_enum.InsightCategoryEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    client_request_impact_statistics: Optional[shared_requestimpactstatistics.RequestImpactStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestImpactStatistics') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupARN') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    insight_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightId') }})
    last_update_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    root_cause_service_id: Optional[shared_serviceid.ServiceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootCauseServiceId') }})
    root_cause_service_request_impact_statistics: Optional[shared_requestimpactstatistics.RequestImpactStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootCauseServiceRequestImpactStatistics') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[shared_insightstate_enum.InsightStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    top_anomalous_services: Optional[list[shared_anomalousservice.AnomalousService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopAnomalousServices') }})
    

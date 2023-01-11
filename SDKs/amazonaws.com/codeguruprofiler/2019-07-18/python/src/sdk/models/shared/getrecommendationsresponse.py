import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomaly as shared_anomaly
from ..shared import recommendation as shared_recommendation


@dataclass_json
@dataclasses.dataclass
class GetRecommendationsResponse:
    r"""GetRecommendationsResponse
    The structure representing the GetRecommendationsResponse.
    """
    
    anomalies: list[shared_anomaly.Anomaly] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('anomalies') }})
    profile_end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileEndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profile_start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileStartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profiling_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroupName') }})
    recommendations: list[shared_recommendation.Recommendation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    

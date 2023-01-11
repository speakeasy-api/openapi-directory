import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationpreferences as shared_recommendationpreferences
from ..shared import metricstatistic_enum as shared_metricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class GetEc2RecommendationProjectedMetricsRequest:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    period: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stat: shared_metricstatistic_enum.MetricStatisticEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    recommendation_preferences: Optional[shared_recommendationpreferences.RecommendationPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationPreferences') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicemetricname_enum as shared_containerservicemetricname_enum
from ..shared import metricstatistic_enum as shared_metricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class GetContainerServiceMetricDataRequest:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_name: shared_containerservicemetricname_enum.ContainerServiceMetricNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    period: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: list[shared_metricstatistic_enum.MetricStatisticEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    

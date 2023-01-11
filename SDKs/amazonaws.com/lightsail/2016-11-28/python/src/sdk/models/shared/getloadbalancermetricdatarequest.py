import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancermetricname_enum as shared_loadbalancermetricname_enum
from ..shared import metricstatistic_enum as shared_metricstatistic_enum
from ..shared import metricunit_enum as shared_metricunit_enum


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerMetricDataRequest:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    load_balancer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    metric_name: shared_loadbalancermetricname_enum.LoadBalancerMetricNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    period: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: list[shared_metricstatistic_enum.MetricStatisticEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    unit: shared_metricunit_enum.MetricUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

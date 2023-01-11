import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketmetricname_enum as shared_bucketmetricname_enum
from ..shared import metricstatistic_enum as shared_metricstatistic_enum
from ..shared import metricunit_enum as shared_metricunit_enum


@dataclass_json
@dataclasses.dataclass
class GetBucketMetricDataRequest:
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_name: shared_bucketmetricname_enum.BucketMetricNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    period: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: list[shared_metricstatistic_enum.MetricStatisticEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    unit: shared_metricunit_enum.MetricUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

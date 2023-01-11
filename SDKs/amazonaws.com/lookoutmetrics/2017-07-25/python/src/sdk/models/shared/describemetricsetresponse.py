import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metric as shared_metric
from ..shared import frequency_enum as shared_frequency_enum
from ..shared import metricsource as shared_metricsource
from ..shared import timestampcolumn as shared_timestampcolumn


@dataclass_json
@dataclasses.dataclass
class DescribeMetricSetResponse:
    anomaly_detector_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorArn') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimension_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    last_modification_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_list: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricList') }})
    metric_set_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetArn') }})
    metric_set_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetDescription') }})
    metric_set_frequency: Optional[shared_frequency_enum.FrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetFrequency') }})
    metric_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetName') }})
    metric_source: Optional[shared_metricsource.MetricSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSource') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    timestamp_column: Optional[shared_timestampcolumn.TimestampColumn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampColumn') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    

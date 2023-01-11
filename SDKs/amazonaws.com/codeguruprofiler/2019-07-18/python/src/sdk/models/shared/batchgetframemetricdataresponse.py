import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestampstructure as shared_timestampstructure
from ..shared import framemetricdatum as shared_framemetricdatum
from ..shared import aggregationperiod_enum as shared_aggregationperiod_enum


@dataclass_json
@dataclasses.dataclass
class BatchGetFrameMetricDataResponse:
    r"""BatchGetFrameMetricDataResponse
    The structure representing the BatchGetFrameMetricDataResponse.
    """
    
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: list[shared_timestampstructure.TimestampStructure] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimes') }})
    frame_metric_data: list[shared_framemetricdatum.FrameMetricDatum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetricData') }})
    resolution: shared_aggregationperiod_enum.AggregationPeriodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unprocessed_end_times: dict[str, list[shared_timestampstructure.TimestampStructure]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprocessedEndTimes') }})
    

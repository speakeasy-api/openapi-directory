import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationperiod_enum as shared_aggregationperiod_enum


@dataclass_json
@dataclasses.dataclass
class AggregatedProfileTime:
    r"""AggregatedProfileTime
     Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes). 
    """
    
    period: Optional[shared_aggregationperiod_enum.AggregationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

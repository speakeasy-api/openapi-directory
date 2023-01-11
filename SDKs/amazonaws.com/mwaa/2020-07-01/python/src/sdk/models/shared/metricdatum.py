import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension
from ..shared import statisticset as shared_statisticset
from ..shared import unit_enum as shared_unit_enum


@dataclass_json
@dataclasses.dataclass
class MetricDatum:
    r"""MetricDatum
    Internal only API.
    """
    
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    statistic_values: Optional[shared_statisticset.StatisticSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatisticValues') }})
    unit: Optional[shared_unit_enum.UnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

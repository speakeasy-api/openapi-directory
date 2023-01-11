import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quality_enum as shared_quality_enum
from ..shared import aggregates as shared_aggregates


@dataclass_json
@dataclasses.dataclass
class AggregatedValue:
    r"""AggregatedValue
    Contains aggregated asset property values (for example, average, minimum, and maximum).
    """
    
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: shared_aggregates.Aggregates = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[shared_quality_enum.QualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    

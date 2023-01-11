import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiongroup as shared_dimensiongroup
from ..shared import servicetype_enum as shared_servicetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeDimensionKeysRequest:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_by: shared_dimensiongroup.DimensionGroup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupBy') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    metric: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metric') }})
    service_type: shared_servicetype_enum.ServiceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceType') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partition_by: Optional[shared_dimensiongroup.DimensionGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionBy') }})
    period_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodInSeconds') }})
    

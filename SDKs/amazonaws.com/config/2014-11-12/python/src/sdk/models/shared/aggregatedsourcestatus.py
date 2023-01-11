import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatedsourcestatustype_enum as shared_aggregatedsourcestatustype_enum
from ..shared import aggregatedsourcetype_enum as shared_aggregatedsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class AggregatedSourceStatus:
    r"""AggregatedSourceStatus
    The current sync status between the source and the aggregator account.
    """
    
    aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    last_error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastErrorCode') }})
    last_error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastErrorMessage') }})
    last_update_status: Optional[shared_aggregatedsourcestatustype_enum.AggregatedSourceStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatus') }})
    last_update_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceId') }})
    source_type: Optional[shared_aggregatedsourcetype_enum.AggregatedSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    

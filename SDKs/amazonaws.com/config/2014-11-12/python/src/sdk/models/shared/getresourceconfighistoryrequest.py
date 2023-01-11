import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chronologicalorder_enum as shared_chronologicalorder_enum
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class GetResourceConfigHistoryRequest:
    r"""GetResourceConfigHistoryRequest
    The input for the <a>GetResourceConfigHistory</a> action.
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    chronological_order: Optional[shared_chronologicalorder_enum.ChronologicalOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chronologicalOrder') }})
    earlier_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlierTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    later_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('laterTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

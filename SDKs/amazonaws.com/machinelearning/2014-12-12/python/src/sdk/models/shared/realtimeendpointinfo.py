import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import realtimeendpointstatus_enum as shared_realtimeendpointstatus_enum


@dataclass_json
@dataclasses.dataclass
class RealtimeEndpointInfo:
    r"""RealtimeEndpointInfo
     Describes the real-time endpoint information for an <code>MLModel</code>.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_status: Optional[shared_realtimeendpointstatus_enum.RealtimeEndpointStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    endpoint_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointUrl') }})
    peak_requests_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeakRequestsPerSecond') }})
    

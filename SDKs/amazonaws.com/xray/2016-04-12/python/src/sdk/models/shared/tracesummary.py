import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valuewithserviceids as shared_valuewithserviceids
from ..shared import availabilityzonedetail as shared_availabilityzonedetail
from ..shared import serviceid as shared_serviceid
from ..shared import errorrootcause as shared_errorrootcause
from ..shared import faultrootcause as shared_faultrootcause
from ..shared import http as shared_http
from ..shared import instanceiddetail as shared_instanceiddetail
from ..shared import resourcearndetail as shared_resourcearndetail
from ..shared import responsetimerootcause as shared_responsetimerootcause
from ..shared import traceuser as shared_traceuser


@dataclass_json
@dataclasses.dataclass
class TraceSummary:
    r"""TraceSummary
    Metadata generated from the segment documents in a trace.
    """
    
    annotations: Optional[dict[str, list[shared_valuewithserviceids.ValueWithServiceIds]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotations') }})
    availability_zones: Optional[list[shared_availabilityzonedetail.AvailabilityZoneDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    duration: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    entry_point: Optional[shared_serviceid.ServiceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    error_root_causes: Optional[list[shared_errorrootcause.ErrorRootCause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorRootCauses') }})
    fault_root_causes: Optional[list[shared_faultrootcause.FaultRootCause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultRootCauses') }})
    has_error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasError') }})
    has_fault: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasFault') }})
    has_throttle: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasThrottle') }})
    http: Optional[shared_http.HTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Http') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_ids: Optional[list[shared_instanceiddetail.InstanceIDDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIds') }})
    is_partial: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPartial') }})
    matched_event_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedEventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_ar_ns: Optional[list[shared_resourcearndetail.ResourceArnDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNs') }})
    response_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTime') }})
    response_time_root_causes: Optional[list[shared_responsetimerootcause.ResponseTimeRootCause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeRootCauses') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    service_ids: Optional[list[shared_serviceid.ServiceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    users: Optional[list[shared_traceuser.TraceUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    

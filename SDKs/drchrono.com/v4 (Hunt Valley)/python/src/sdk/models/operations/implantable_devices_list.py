import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import implantabledevice as shared_implantabledevice


@dataclasses.dataclass
class ImplantableDevicesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    mu_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date', 'style': 'form', 'explode': True }})
    mu_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date_range', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ImplantableDevicesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ImplantableDevicesList200ApplicationJSON:
    r"""ImplantableDevicesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_implantabledevice.ImplantableDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ImplantableDevicesListRequest:
    query_params: ImplantableDevicesListQueryParams = dataclasses.field()
    security: ImplantableDevicesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImplantableDevicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    implantable_devices_list_200_application_json_object: Optional[ImplantableDevicesList200ApplicationJSON] = dataclasses.field(default=None)
    

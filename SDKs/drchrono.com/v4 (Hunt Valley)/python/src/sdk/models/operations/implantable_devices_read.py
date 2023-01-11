import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import implantabledevice as shared_implantabledevice


@dataclasses.dataclass
class ImplantableDevicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImplantableDevicesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    mu_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date', 'style': 'form', 'explode': True }})
    mu_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date_range', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ImplantableDevicesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ImplantableDevicesReadRequest:
    path_params: ImplantableDevicesReadPathParams = dataclasses.field()
    query_params: ImplantableDevicesReadQueryParams = dataclasses.field()
    security: ImplantableDevicesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImplantableDevicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    implantable_device: Optional[shared_implantabledevice.ImplantableDevice] = dataclasses.field(default=None)
    

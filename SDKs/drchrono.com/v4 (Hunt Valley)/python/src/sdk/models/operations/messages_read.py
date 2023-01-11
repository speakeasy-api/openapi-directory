import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import doctormessage as shared_doctormessage


@dataclasses.dataclass
class MessagesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MessagesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    owner: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'owner', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    received_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'received_since', 'style': 'form', 'explode': True }})
    responsible_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responsible_user', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    updated_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated_since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MessagesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MessagesReadRequest:
    path_params: MessagesReadPathParams = dataclasses.field()
    query_params: MessagesReadQueryParams = dataclasses.field()
    security: MessagesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MessagesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    doctor_message: Optional[shared_doctormessage.DoctorMessage] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import office as shared_office


@dataclasses.dataclass
class OfficesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OfficesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OfficesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OfficesReadRequest:
    path_params: OfficesReadPathParams = dataclasses.field()
    query_params: OfficesReadQueryParams = dataclasses.field()
    security: OfficesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OfficesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    office: Optional[shared_office.Office] = dataclasses.field(default=None)
    

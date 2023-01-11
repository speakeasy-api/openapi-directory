import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import inventoryvaccine as shared_inventoryvaccine


@dataclasses.dataclass
class InventoryVaccinesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InventoryVaccinesReadQueryParams:
    cvx_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cvx_code', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InventoryVaccinesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class InventoryVaccinesReadRequest:
    path_params: InventoryVaccinesReadPathParams = dataclasses.field()
    query_params: InventoryVaccinesReadQueryParams = dataclasses.field()
    security: InventoryVaccinesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InventoryVaccinesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_vaccine: Optional[shared_inventoryvaccine.InventoryVaccine] = dataclasses.field(default=None)
    

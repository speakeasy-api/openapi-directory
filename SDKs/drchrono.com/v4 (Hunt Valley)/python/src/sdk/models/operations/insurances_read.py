import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insurance as shared_insurance


@dataclasses.dataclass
class InsurancesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InsurancesReadQueryParams:
    payer_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payer_type', 'style': 'form', 'explode': True }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InsurancesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class InsurancesReadRequest:
    path_params: InsurancesReadPathParams = dataclasses.field()
    query_params: InsurancesReadQueryParams = dataclasses.field()
    security: InsurancesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InsurancesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insurance: Optional[shared_insurance.Insurance] = dataclasses.field(default=None)
    

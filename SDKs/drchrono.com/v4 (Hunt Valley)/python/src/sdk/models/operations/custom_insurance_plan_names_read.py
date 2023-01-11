import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import custominsuranceplanname as shared_custominsuranceplanname


@dataclasses.dataclass
class CustomInsurancePlanNamesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CustomInsurancePlanNamesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomInsurancePlanNamesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomInsurancePlanNamesReadRequest:
    path_params: CustomInsurancePlanNamesReadPathParams = dataclasses.field()
    query_params: CustomInsurancePlanNamesReadQueryParams = dataclasses.field()
    security: CustomInsurancePlanNamesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomInsurancePlanNamesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_insurance_plan_name: Optional[shared_custominsuranceplanname.CustomInsurancePlanName] = dataclasses.field(default=None)
    

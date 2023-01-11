import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import billingprofile as shared_billingprofile


@dataclasses.dataclass
class BillingProfilesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingProfilesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BillingProfilesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BillingProfilesReadRequest:
    path_params: BillingProfilesReadPathParams = dataclasses.field()
    query_params: BillingProfilesReadQueryParams = dataclasses.field()
    security: BillingProfilesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BillingProfilesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    billing_profile: Optional[shared_billingprofile.BillingProfile] = dataclasses.field(default=None)
    

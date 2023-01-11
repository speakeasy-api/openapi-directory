import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class NifComprehensivePathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NifComprehensiveRequestBody:
    nif_number: str = dataclasses.field(metadata={'form': { 'field_name': 'nifNumber' }})
    company_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    

@dataclasses.dataclass
class NifComprehensiveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class NifComprehensiveRequest:
    path_params: NifComprehensivePathParams = dataclasses.field()
    request: NifComprehensiveRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: NifComprehensiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class NifComprehensiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    nif_comprehensive_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    nif_comprehensive_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

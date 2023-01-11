import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import farmorganizationtype_enum as shared_farmorganizationtype_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class FetchFarmOrganizationByTypeAndIDPathParams:
    farm_organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'farmOrganizationId', 'style': 'simple', 'explode': False }})
    farm_organization_type: shared_farmorganizationtype_enum.FarmOrganizationTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'farmOrganizationType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFarmOrganizationByTypeAndIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchFarmOrganizationByTypeAndIDRequest:
    path_params: FetchFarmOrganizationByTypeAndIDPathParams = dataclasses.field()
    security: FetchFarmOrganizationByTypeAndIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchFarmOrganizationByTypeAndIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    farm_organization: Optional[Any] = dataclasses.field(default=None)
    

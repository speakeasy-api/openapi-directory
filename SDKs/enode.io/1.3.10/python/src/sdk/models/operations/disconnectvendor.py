import dataclasses
from enum import Enum
from ..shared import security as shared_security

class DisconnectVendorVendorEnum(str, Enum):
    TESLA = "TESLA"
    BMW = "BMW"
    AUDI = "AUDI"
    VOLKSWAGEN = "VOLKSWAGEN"
    HYUNDAI = "HYUNDAI"
    PEUGEOT = "PEUGEOT"
    NISSAN = "NISSAN"


@dataclasses.dataclass
class DisconnectVendorPathParams:
    vendor: DisconnectVendorVendorEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'vendor', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisconnectVendorSecurity:
    user_access_token: shared_security.SchemeUserAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DisconnectVendorRequest:
    path_params: DisconnectVendorPathParams = dataclasses.field()
    security: DisconnectVendorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisconnectVendorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import weakcert as shared_weakcert


@dataclasses.dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest:
    path_params: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams = dataclasses.field()
    security: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    weak_certs: Optional[list[shared_weakcert.WeakCert]] = dataclasses.field(default=None)
    

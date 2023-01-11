import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import expiredcert as shared_expiredcert
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest:
    path_params: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams = dataclasses.field()
    security: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    expired_certs: Optional[list[shared_expiredcert.ExpiredCert]] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

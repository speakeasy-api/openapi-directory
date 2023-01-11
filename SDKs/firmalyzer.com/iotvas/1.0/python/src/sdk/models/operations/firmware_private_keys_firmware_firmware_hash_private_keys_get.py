import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cryptokey as shared_cryptokey
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest:
    path_params: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams = dataclasses.field()
    security: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crypto_keys: Optional[list[shared_cryptokey.CryptoKey]] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import defaultaccount as shared_defaultaccount
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest:
    path_params: FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams = dataclasses.field()
    security: FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_accounts: Optional[list[shared_defaultaccount.DefaultAccount]] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

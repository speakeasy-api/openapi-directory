import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firmwarerisk as shared_firmwarerisk
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetRequest:
    path_params: FirmwareRiskFirmwareFirmwareHashRiskGetPathParams = dataclasses.field()
    security: FirmwareRiskFirmwareFirmwareHashRiskGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    firmware_risk: Optional[shared_firmwarerisk.FirmwareRisk] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

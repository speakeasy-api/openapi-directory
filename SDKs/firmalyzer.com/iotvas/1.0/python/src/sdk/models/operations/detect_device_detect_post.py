import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import devicefeatures as shared_devicefeatures
from ..shared import deviceinfo as shared_deviceinfo
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class DetectDeviceDetectPostSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DetectDeviceDetectPostRequest:
    request: shared_devicefeatures.DeviceFeatures = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: DetectDeviceDetectPostSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DetectDeviceDetectPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_info: Optional[shared_deviceinfo.DeviceInfo] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

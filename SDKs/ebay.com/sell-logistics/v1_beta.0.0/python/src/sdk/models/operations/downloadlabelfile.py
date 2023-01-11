import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DownloadLabelFilePathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadLabelFileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DownloadLabelFileRequest:
    path_params: DownloadLabelFilePathParams = dataclasses.field()
    security: DownloadLabelFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadLabelFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    

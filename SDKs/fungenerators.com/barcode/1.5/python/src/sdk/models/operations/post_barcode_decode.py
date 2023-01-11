import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostBarcodeDecodeRequestBody:
    barimage: bytes = dataclasses.field(metadata={'form': { 'field_name': 'barimage' }})
    

@dataclasses.dataclass
class PostBarcodeDecodeSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostBarcodeDecodeRequest:
    security: PostBarcodeDecodeSecurity = dataclasses.field()
    request: Optional[PostBarcodeDecodeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostBarcodeDecodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

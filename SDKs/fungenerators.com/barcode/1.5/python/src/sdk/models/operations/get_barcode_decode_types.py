import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBarcodeDecodeTypesSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetBarcodeDecodeTypesRequest:
    security: GetBarcodeDecodeTypesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBarcodeDecodeTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

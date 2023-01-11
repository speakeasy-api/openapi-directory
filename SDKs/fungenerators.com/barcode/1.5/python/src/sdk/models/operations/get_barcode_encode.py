import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBarcodeEncodeQueryParams:
    number: str = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    barcodeformat: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'barcodeformat', 'style': 'form', 'explode': True }})
    outputformat: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputformat', 'style': 'form', 'explode': True }})
    totalheight: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'totalheight', 'style': 'form', 'explode': True }})
    widthfactor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'widthfactor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBarcodeEncodeSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetBarcodeEncodeRequest:
    query_params: GetBarcodeEncodeQueryParams = dataclasses.field()
    security: GetBarcodeEncodeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBarcodeEncodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

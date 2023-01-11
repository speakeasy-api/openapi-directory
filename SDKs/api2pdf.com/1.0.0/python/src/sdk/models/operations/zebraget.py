import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ZebraGetQueryParams:
    format: str = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    value: str = dataclasses.field(metadata={'query_param': { 'field_name': 'value', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    showlabel: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showlabel', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ZebraGetSecurity:
    query_api_key: shared_security.SchemeQueryAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class ZebraGetRequest:
    query_params: ZebraGetQueryParams = dataclasses.field()
    security: ZebraGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ZebraGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    zebra_get_200_image_png_binary_string: Optional[bytes] = dataclasses.field(default=None)
    

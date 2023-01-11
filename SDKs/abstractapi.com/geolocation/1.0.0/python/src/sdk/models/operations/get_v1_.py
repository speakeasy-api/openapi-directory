import dataclasses
from typing import Optional
from ..shared import inline_response_200 as shared_inline_response_200


GET_V1__SERVERS = [
	"https://ipgeolocation.abstractapi.com",
]


@dataclasses.dataclass
class GetV1QueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip_address', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1Request:
    query_params: GetV1QueryParams = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_200: Optional[shared_inline_response_200.InlineResponse200] = dataclasses.field(default=None)
    

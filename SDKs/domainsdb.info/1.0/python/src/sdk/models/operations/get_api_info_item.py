import dataclasses
from typing import Optional
from ..shared import api_key_info as shared_api_key_info


@dataclasses.dataclass
class GetAPIInfoItemQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIInfoItemRequest:
    query_params: GetAPIInfoItemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIInfoItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_info: Optional[shared_api_key_info.APIKeyInfo] = dataclasses.field(default=None)
    

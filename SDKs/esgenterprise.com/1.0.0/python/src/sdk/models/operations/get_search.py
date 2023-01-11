import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSearchQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = dataclasses.field()
    security: GetSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_search_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

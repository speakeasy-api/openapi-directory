import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGetSuggestedFollowsAllQueryParams:
    in_onboarding: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'in_onboarding', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetSuggestedFollowsAllRequest:
    query_params: GetGetSuggestedFollowsAllQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetSuggestedFollowsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

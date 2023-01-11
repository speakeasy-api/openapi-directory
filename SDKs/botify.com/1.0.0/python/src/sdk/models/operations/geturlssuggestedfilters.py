import dataclasses
from typing import Optional
from enum import Enum
from ..shared import urlsaggsquery as shared_urlsaggsquery
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUrlsSuggestedFiltersPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetUrlsSuggestedFiltersAreaEnum(str, Enum):
    CURRENT = "current"
    NEW = "new"


@dataclasses.dataclass
class GetUrlsSuggestedFiltersQueryParams:
    area: Optional[GetUrlsSuggestedFiltersAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUrlsSuggestedFiltersRequest:
    path_params: GetUrlsSuggestedFiltersPathParams = dataclasses.field()
    query_params: GetUrlsSuggestedFiltersQueryParams = dataclasses.field()
    request: Optional[shared_urlsaggsquery.UrlsAggsQuery] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUrlsSuggestedFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    urls_aggs_query: Optional[shared_urlsaggsquery.UrlsAggsQuery] = dataclasses.field(default=None)
    

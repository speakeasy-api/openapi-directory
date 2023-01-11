import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import urlsaggsquery as shared_urlsaggsquery
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUrlsAggsPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetUrlsAggsAreaEnum(str, Enum):
    CURRENT = "current"
    DISAPPEARED = "disappeared"
    NEW = "new"
    SEARCH_ENGINES_ORPHANS = "search_engines_orphans"


@dataclasses.dataclass
class GetUrlsAggsQueryParams:
    area: Optional[GetUrlsAggsAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUrlsAggsRequest:
    path_params: GetUrlsAggsPathParams = dataclasses.field()
    query_params: GetUrlsAggsQueryParams = dataclasses.field()
    request: Optional[list[shared_urlsaggsquery.UrlsAggsQuery]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUrlsAggsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_urls_aggs_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    

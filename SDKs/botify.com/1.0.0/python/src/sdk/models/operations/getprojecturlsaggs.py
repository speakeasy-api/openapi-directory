import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import urlsaggsquery as shared_urlsaggsquery
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetProjectUrlsAggsPathParams:
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetProjectUrlsAggsAreaEnum(str, Enum):
    CURRENT = "current"
    DISAPPEARED = "disappeared"
    NEW = "new"


@dataclasses.dataclass
class GetProjectUrlsAggsQueryParams:
    area: Optional[GetProjectUrlsAggsAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    last_analysis_slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_analysis_slug', 'style': 'form', 'explode': True }})
    nb_analyses: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nb_analyses', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectUrlsAggsRequest:
    path_params: GetProjectUrlsAggsPathParams = dataclasses.field()
    query_params: GetProjectUrlsAggsQueryParams = dataclasses.field()
    request: Optional[list[shared_urlsaggsquery.UrlsAggsQuery]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetProjectUrlsAggsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    

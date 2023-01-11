import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urlsquery as shared_urlsquery
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUrlsPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetUrlsAreaEnum(str, Enum):
    CURRENT = "current"
    DISAPPEARED = "disappeared"
    NEW = "new"
    SEARCH_ENGINES_ORPHANS = "search_engines_orphans"


@dataclasses.dataclass
class GetUrlsQueryParams:
    area: Optional[GetUrlsAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetUrls200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    results: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclasses.dataclass
class GetUrlsRequest:
    path_params: GetUrlsPathParams = dataclasses.field()
    query_params: GetUrlsQueryParams = dataclasses.field()
    request: Optional[shared_urlsquery.UrlsQuery] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUrlsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_urls_200_application_json_object: Optional[GetUrls200ApplicationJSON] = dataclasses.field(default=None)
    

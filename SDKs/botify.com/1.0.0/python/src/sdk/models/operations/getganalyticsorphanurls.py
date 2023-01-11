import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlorphanurls as shared_crawlorphanurls
from ..shared import defaultpayload as shared_defaultpayload

class GetGanalyticsOrphanUrLsMediumEnum(str, Enum):
    ORGANIC = "organic"
    SOCIAL = "social"

class GetGanalyticsOrphanUrLsSourceEnum(str, Enum):
    ALL = "all"
    AOL = "aol"
    ASK = "ask"
    BAIDU = "baidu"
    BING = "bing"
    FACEBOOK = "facebook"
    GOOGLE = "google"
    GOOGLE_PLUS_ = "google+"
    LINKEDIN = "linkedin"
    NAVER = "naver"
    PINTEREST = "pinterest"
    REDDIT = "reddit"
    TUMBLR = "tumblr"
    TWITTER = "twitter"
    YAHOO = "yahoo"
    YANDEX = "yandex"


@dataclasses.dataclass
class GetGanalyticsOrphanUrLsPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    medium: GetGanalyticsOrphanUrLsMediumEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'medium', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    source: GetGanalyticsOrphanUrLsSourceEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGanalyticsOrphanUrLsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetGanalyticsOrphanUrLs200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    results: Optional[list[shared_crawlorphanurls.CrawlOrphanUrLs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclasses.dataclass
class GetGanalyticsOrphanUrLsRequest:
    path_params: GetGanalyticsOrphanUrLsPathParams = dataclasses.field()
    query_params: GetGanalyticsOrphanUrLsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGanalyticsOrphanUrLsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_ganalytics_orphan_ur_ls_200_application_json_object: Optional[GetGanalyticsOrphanUrLs200ApplicationJSON] = dataclasses.field(default=None)
    

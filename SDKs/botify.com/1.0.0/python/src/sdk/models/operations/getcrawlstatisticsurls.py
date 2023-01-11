import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import defaultpayload as shared_defaultpayload

class GetCrawlStatisticsUrlsListTypeEnum(str, Enum):
    CRAWLED = "crawled"
    ERRORS = "errors"


@dataclasses.dataclass
class GetCrawlStatisticsUrlsPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    list_type: GetCrawlStatisticsUrlsListTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'list_type', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrawlStatisticsUrlsRequest:
    path_params: GetCrawlStatisticsUrlsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCrawlStatisticsUrlsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_crawl_statistics_urls_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import crawlstatistics as shared_crawlstatistics
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetCrawlStatisticsPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrawlStatisticsRequest:
    path_params: GetCrawlStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCrawlStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crawl_statistics: Optional[shared_crawlstatistics.CrawlStatistics] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from enum import Enum
from ..shared import crawlstatisticstime as shared_crawlstatisticstime
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetCrawlStatisticsByFrequencyPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetCrawlStatisticsByFrequencyFrequencyEnum(str, Enum):
    ONEMN = "1mn"
    FIVEMN = "5mn"
    SIXTYMN = "60mn"


@dataclasses.dataclass
class GetCrawlStatisticsByFrequencyQueryParams:
    frequency: GetCrawlStatisticsByFrequencyFrequencyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'frequency', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCrawlStatisticsByFrequencyRequest:
    path_params: GetCrawlStatisticsByFrequencyPathParams = dataclasses.field()
    query_params: GetCrawlStatisticsByFrequencyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCrawlStatisticsByFrequencyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crawl_statistics_time: Optional[shared_crawlstatisticstime.CrawlStatisticsTime] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    

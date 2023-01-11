import dataclasses
from typing import Optional
from ..shared import zone_stats as shared_zone_stats


@dataclasses.dataclass
class GetStatisticsItemPathParams:
    zone: str = dataclasses.field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatisticsItemQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatisticsItemRequest:
    path_params: GetStatisticsItemPathParams = dataclasses.field()
    query_params: GetStatisticsItemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatisticsItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    zone_stats: Optional[shared_zone_stats.ZoneStats] = dataclasses.field(default=None)
    

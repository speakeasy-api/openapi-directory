import dataclasses
from typing import Optional
from ..shared import zone_stats as shared_zone_stats


@dataclasses.dataclass
class GetStatisticsCollectionQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatisticsCollectionRequest:
    query_params: GetStatisticsCollectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatisticsCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    zone_stats: Optional[list[shared_zone_stats.ZoneStats]] = dataclasses.field(default=None)
    

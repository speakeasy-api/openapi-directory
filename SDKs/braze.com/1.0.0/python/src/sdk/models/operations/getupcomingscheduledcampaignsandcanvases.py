import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUpcomingScheduledCampaignsAndCanvasesQueryParams:
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpcomingScheduledCampaignsAndCanvasesRequest:
    query_params: GetUpcomingScheduledCampaignsAndCanvasesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpcomingScheduledCampaignsAndCanvasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

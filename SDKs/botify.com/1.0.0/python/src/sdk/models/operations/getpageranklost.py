import dataclasses
from typing import Optional
from ..shared import defaultpayload as shared_defaultpayload
from ..shared import pageranklost as shared_pageranklost


@dataclasses.dataclass
class GetPageRankLostPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPageRankLostRequest:
    path_params: GetPageRankLostPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPageRankLostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    page_rank_lost: Optional[shared_pageranklost.PageRankLost] = dataclasses.field(default=None)
    

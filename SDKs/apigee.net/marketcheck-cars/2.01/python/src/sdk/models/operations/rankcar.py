import dataclasses
from typing import Optional
from ..shared import carrankrequest as shared_carrankrequest
from ..shared import carrankresponse as shared_carrankresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class RankCarQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RankCarRequest:
    query_params: RankCarQueryParams = dataclasses.field()
    request: shared_carrankrequest.CarRankRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RankCarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    car_rank_response: Optional[shared_carrankresponse.CarRankResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

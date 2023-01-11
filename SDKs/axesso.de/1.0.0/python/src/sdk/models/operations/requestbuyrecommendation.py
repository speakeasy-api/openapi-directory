import dataclasses
from typing import Optional
from ..shared import buyrecommendationresponse as shared_buyrecommendationresponse


@dataclasses.dataclass
class RequestBuyRecommendationQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RequestBuyRecommendationRequest:
    query_params: RequestBuyRecommendationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RequestBuyRecommendationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    buy_recommendation_response: Optional[shared_buyrecommendationresponse.BuyRecommendationResponse] = dataclasses.field(default=None)
    

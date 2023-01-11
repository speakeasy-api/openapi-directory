import dataclasses
from typing import Optional
from ..shared import affiliatevideosearchresponse as shared_affiliatevideosearchresponse


@dataclasses.dataclass
class GetV3AffiliatesSearchVideosQueryParams:
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3AffiliatesSearchVideosHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3AffiliatesSearchVideosRequest:
    headers: GetV3AffiliatesSearchVideosHeaders = dataclasses.field()
    query_params: GetV3AffiliatesSearchVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3AffiliatesSearchVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    affiliate_video_search_response: Optional[shared_affiliatevideosearchresponse.AffiliateVideoSearchResponse] = dataclasses.field(default=None)
    

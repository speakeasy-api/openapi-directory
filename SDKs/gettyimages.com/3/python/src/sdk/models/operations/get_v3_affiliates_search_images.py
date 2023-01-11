import dataclasses
from typing import Optional
from enum import Enum
from ..shared import affiliatesearchstyle_enum as shared_affiliatesearchstyle_enum
from ..shared import affiliateimagesearchresponse as shared_affiliateimagesearchresponse


@dataclasses.dataclass
class GetV3AffiliatesSearchImagesQueryParams:
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    style: Optional[shared_affiliatesearchstyle_enum.AffiliateSearchStyleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'style', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3AffiliatesSearchImagesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3AffiliatesSearchImagesRequest:
    headers: GetV3AffiliatesSearchImagesHeaders = dataclasses.field()
    query_params: GetV3AffiliatesSearchImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3AffiliatesSearchImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    affiliate_image_search_response: Optional[shared_affiliateimagesearchresponse.AffiliateImageSearchResponse] = dataclasses.field(default=None)
    

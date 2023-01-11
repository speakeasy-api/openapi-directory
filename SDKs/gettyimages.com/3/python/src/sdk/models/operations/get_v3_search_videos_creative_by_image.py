import dataclasses
from typing import Optional
from enum import Enum
from ..shared import createvideosearchfacetsfields_enum as shared_createvideosearchfacetsfields_enum
from ..shared import creativevideosfieldvalues_enum as shared_creativevideosfieldvalues_enum
from ..shared import creativevideosearchresults as shared_creativevideosearchresults


@dataclasses.dataclass
class GetV3SearchVideosCreativeByImageQueryParams:
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    facet_fields: Optional[list[shared_createvideosearchfacetsfields_enum.CreateVideoSearchFacetsFieldsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_creativevideosfieldvalues_enum.CreativeVideosFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_url', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_types', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeByImageHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeByImageRequest:
    headers: GetV3SearchVideosCreativeByImageHeaders = dataclasses.field()
    query_params: GetV3SearchVideosCreativeByImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeByImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creative_video_search_results: Optional[shared_creativevideosearchresults.CreativeVideoSearchResults] = dataclasses.field(default=None)
    

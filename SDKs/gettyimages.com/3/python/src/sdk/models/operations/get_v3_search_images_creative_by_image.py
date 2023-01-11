import dataclasses
from typing import Optional
from enum import Enum
from ..shared import createimagesearchfacetsfields_enum as shared_createimagesearchfacetsfields_enum
from ..shared import creativeimagesfieldvalues_enum as shared_creativeimagesfieldvalues_enum
from ..shared import searchbyimageresourceresults as shared_searchbyimageresourceresults


@dataclasses.dataclass
class GetV3SearchImagesCreativeByImageQueryParams:
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    facet_fields: Optional[list[shared_createimagesearchfacetsfields_enum.CreateImageSearchFacetsFieldsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_creativeimagesfieldvalues_enum.CreativeImagesFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    image_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_fingerprint', 'style': 'form', 'explode': True }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_url', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_types', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesCreativeByImageHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesCreativeByImageRequest:
    headers: GetV3SearchImagesCreativeByImageHeaders = dataclasses.field()
    query_params: GetV3SearchImagesCreativeByImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchImagesCreativeByImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_by_image_resource_results: Optional[shared_searchbyimageresourceresults.SearchByImageResourceResults] = dataclasses.field(default=None)
    

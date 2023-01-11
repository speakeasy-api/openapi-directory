import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ageofpeoplefiltertype_enum as shared_ageofpeoplefiltertype_enum
from ..shared import collectionsfiltertype_enum as shared_collectionsfiltertype_enum
from ..shared import compositionsfiltertype_enum as shared_compositionsfiltertype_enum
from ..shared import ethnicityfiltertype_enum as shared_ethnicityfiltertype_enum
from ..shared import imagesfieldvalues_enum as shared_imagesfieldvalues_enum
from ..shared import searchfiletype_enum as shared_searchfiletype_enum
from ..shared import graphicalstyle_enum as shared_graphicalstyle_enum
from ..shared import graphicalstylesfiltertype_enum as shared_graphicalstylesfiltertype_enum
from ..shared import teeshirtsize_enum as shared_teeshirtsize_enum
from ..shared import numberofpeoplefiltertype_enum as shared_numberofpeoplefiltertype_enum
from ..shared import orientationrequest_enum as shared_orientationrequest_enum
from ..shared import blendedimagesortorder_enum as shared_blendedimagesortorder_enum
from ..shared import imagesearchitemsearchresults as shared_imagesearchitemsearchresults


@dataclasses.dataclass
class GetV3SearchImagesQueryParams:
    age_of_people: Optional[list[shared_ageofpeoplefiltertype_enum.AgeOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    collection_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared_collectionsfiltertype_enum.CollectionsFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    compositions: Optional[list[shared_compositionsfiltertype_enum.CompositionsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    embed_content_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed_content_only', 'style': 'form', 'explode': True }})
    ethnicity: Optional[list[shared_ethnicityfiltertype_enum.EthnicityFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': False }})
    event_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': False }})
    exclude_nudity: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_nudity', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_imagesfieldvalues_enum.ImagesFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    file_types: Optional[list[shared_searchfiletype_enum.SearchFileTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_types', 'style': 'form', 'explode': False }})
    graphical_styles: Optional[list[shared_graphicalstyle_enum.GraphicalStyleEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles', 'style': 'form', 'explode': False }})
    graphical_styles_filter_type: Optional[shared_graphicalstylesfiltertype_enum.GraphicalStylesFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles_filter_type', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    minimum_size: Optional[shared_teeshirtsize_enum.TeeShirtSizeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimum_size', 'style': 'form', 'explode': True }})
    number_of_people: Optional[list[shared_numberofpeoplefiltertype_enum.NumberOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number_of_people', 'style': 'form', 'explode': False }})
    orientations: Optional[list[shared_orientationrequest_enum.OrientationRequestEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_blendedimagesortorder_enum.BlendedImageSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesRequest:
    headers: GetV3SearchImagesHeaders = dataclasses.field()
    query_params: GetV3SearchImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_search_item_search_results: Optional[shared_imagesearchitemsearchresults.ImageSearchItemSearchResults] = dataclasses.field(default=None)
    

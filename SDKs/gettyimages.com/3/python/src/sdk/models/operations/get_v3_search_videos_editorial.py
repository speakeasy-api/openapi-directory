import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ageofpeoplefiltertype_enum as shared_ageofpeoplefiltertype_enum
from ..shared import videoaspectratiofiltertype_enum as shared_videoaspectratiofiltertype_enum
from ..shared import collectionsfiltertype_enum as shared_collectionsfiltertype_enum
from ..shared import compositionsfiltertype_enum as shared_compositionsfiltertype_enum
from ..shared import editorialvideotype_enum as shared_editorialvideotype_enum
from ..shared import editorialvideosearchfacetsfields_enum as shared_editorialvideosearchfacetsfields_enum
from ..shared import editorialvideosfieldvalues_enum as shared_editorialvideosfieldvalues_enum
from ..shared import videoformatsrequest_enum as shared_videoformatsrequest_enum
from ..shared import videoframerates_enum as shared_videoframerates_enum
from ..shared import imagetechniquesfiltertype_enum as shared_imagetechniquesfiltertype_enum
from ..shared import videoorientationrequest_enum as shared_videoorientationrequest_enum
from ..shared import releasestatus_enum as shared_releasestatus_enum
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import viewpointsfiltertype_enum as shared_viewpointsfiltertype_enum
from ..shared import editorialvideosearchresults as shared_editorialvideosearchresults


@dataclasses.dataclass
class GetV3SearchVideosEditorialQueryParams:
    age_of_people: Optional[list[shared_ageofpeoplefiltertype_enum.AgeOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    aspect_ratios: Optional[list[shared_videoaspectratiofiltertype_enum.VideoAspectRatioFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratios', 'style': 'form', 'explode': False }})
    collection_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared_collectionsfiltertype_enum.CollectionsFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    compositions: Optional[list[shared_compositionsfiltertype_enum.CompositionsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    editorial_video_types: Optional[list[shared_editorialvideotype_enum.EditorialVideoTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'editorial_video_types', 'style': 'form', 'explode': False }})
    entity_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_uris', 'style': 'form', 'explode': False }})
    facet_fields: Optional[list[shared_editorialvideosearchfacetsfields_enum.EditorialVideoSearchFacetsFieldsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_editorialvideosfieldvalues_enum.EditorialVideosFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    format_available: Optional[shared_videoformatsrequest_enum.VideoFormatsRequestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format_available', 'style': 'form', 'explode': True }})
    frame_rates: Optional[list[shared_videoframerates_enum.VideoFrameRatesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'frame_rates', 'style': 'form', 'explode': False }})
    image_techniques: Optional[list[shared_imagetechniquesfiltertype_enum.ImageTechniquesFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_techniques', 'style': 'form', 'explode': False }})
    include_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    max_clip_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_clip_length', 'style': 'form', 'explode': True }})
    min_clip_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_clip_length', 'style': 'form', 'explode': True }})
    orientations: Optional[list[shared_videoorientationrequest_enum.VideoOrientationRequestEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    release_status: Optional[shared_releasestatus_enum.ReleaseStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'release_status', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    viewpoints: Optional[list[shared_viewpointsfiltertype_enum.ViewpointsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'viewpoints', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosEditorialHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosEditorialRequest:
    headers: GetV3SearchVideosEditorialHeaders = dataclasses.field()
    query_params: GetV3SearchVideosEditorialQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchVideosEditorialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_video_search_results: Optional[shared_editorialvideosearchresults.EditorialVideoSearchResults] = dataclasses.field(default=None)
    

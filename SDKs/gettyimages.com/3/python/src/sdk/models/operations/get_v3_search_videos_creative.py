import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ageofpeoplefiltertype_enum as shared_ageofpeoplefiltertype_enum
from ..shared import videoaspectratiofiltertype_enum as shared_videoaspectratiofiltertype_enum
from ..shared import collectionsfiltertype_enum as shared_collectionsfiltertype_enum
from ..shared import compositionsfiltertype_enum as shared_compositionsfiltertype_enum
from ..shared import createvideosearchfacetsfields_enum as shared_createvideosearchfacetsfields_enum
from ..shared import creativevideosfieldvalues_enum as shared_creativevideosfieldvalues_enum
from ..shared import videoformatsrequest_enum as shared_videoformatsrequest_enum
from ..shared import videoframerates_enum as shared_videoframerates_enum
from ..shared import imagetechniquesfiltertype_enum as shared_imagetechniquesfiltertype_enum
from ..shared import licensemodelvideorequest_enum as shared_licensemodelvideorequest_enum
from ..shared import videoorientationrequest_enum as shared_videoorientationrequest_enum
from ..shared import releasestatus_enum as shared_releasestatus_enum
from ..shared import creativevideosortorder_enum as shared_creativevideosortorder_enum
from ..shared import viewpointsfiltertype_enum as shared_viewpointsfiltertype_enum
from ..shared import creativevideosearchresults as shared_creativevideosearchresults


@dataclasses.dataclass
class GetV3SearchVideosCreativeQueryParams:
    age_of_people: Optional[list[shared_ageofpeoplefiltertype_enum.AgeOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    aspect_ratios: Optional[list[shared_videoaspectratiofiltertype_enum.VideoAspectRatioFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratios', 'style': 'form', 'explode': False }})
    collection_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared_collectionsfiltertype_enum.CollectionsFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    compositions: Optional[list[shared_compositionsfiltertype_enum.CompositionsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    exclude_editorial_use_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_editorial_use_only', 'style': 'form', 'explode': True }})
    exclude_nudity: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_nudity', 'style': 'form', 'explode': True }})
    facet_fields: Optional[list[shared_createvideosearchfacetsfields_enum.CreateVideoSearchFacetsFieldsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_creativevideosfieldvalues_enum.CreativeVideosFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    format_available: Optional[shared_videoformatsrequest_enum.VideoFormatsRequestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format_available', 'style': 'form', 'explode': True }})
    frame_rates: Optional[list[shared_videoframerates_enum.VideoFrameRatesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'frame_rates', 'style': 'form', 'explode': False }})
    image_techniques: Optional[list[shared_imagetechniquesfiltertype_enum.ImageTechniquesFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_techniques', 'style': 'form', 'explode': False }})
    include_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    license_models: Optional[list[shared_licensemodelvideorequest_enum.LicenseModelVideoRequestEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license_models', 'style': 'form', 'explode': False }})
    max_clip_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_clip_length', 'style': 'form', 'explode': True }})
    min_clip_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_clip_length', 'style': 'form', 'explode': True }})
    orientations: Optional[list[shared_videoorientationrequest_enum.VideoOrientationRequestEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    release_status: Optional[shared_releasestatus_enum.ReleaseStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'release_status', 'style': 'form', 'explode': True }})
    safe_search: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_search', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_creativevideosortorder_enum.CreativeVideoSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    viewpoints: Optional[list[shared_viewpointsfiltertype_enum.ViewpointsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'viewpoints', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeRequest:
    headers: GetV3SearchVideosCreativeHeaders = dataclasses.field()
    query_params: GetV3SearchVideosCreativeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchVideosCreativeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creative_video_search_results: Optional[shared_creativevideosearchresults.CreativeVideoSearchResults] = dataclasses.field(default=None)
    

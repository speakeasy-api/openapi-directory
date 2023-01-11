import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import ageofpeoplefiltertype_enum as shared_ageofpeoplefiltertype_enum
from ..shared import collectionsfiltertype_enum as shared_collectionsfiltertype_enum
from ..shared import compositionsfiltertype_enum as shared_compositionsfiltertype_enum
from ..shared import editorialsegmentcontract_enum as shared_editorialsegmentcontract_enum
from ..shared import ethnicityfiltertype_enum as shared_ethnicityfiltertype_enum
from ..shared import editorialimagesearchfacetsfields_enum as shared_editorialimagesearchfacetsfields_enum
from ..shared import editorialimagesfieldvalues_enum as shared_editorialimagesfieldvalues_enum
from ..shared import searchfiletype_enum as shared_searchfiletype_enum
from ..shared import editorialgraphicalstyle_enum as shared_editorialgraphicalstyle_enum
from ..shared import graphicalstylesfiltertype_enum as shared_graphicalstylesfiltertype_enum
from ..shared import teeshirtsize_enum as shared_teeshirtsize_enum
from ..shared import numberofpeoplefiltertype_enum as shared_numberofpeoplefiltertype_enum
from ..shared import orientationrequest_enum as shared_orientationrequest_enum
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import editorialimagesearchresults as shared_editorialimagesearchresults


@dataclasses.dataclass
class GetV3SearchImagesEditorialQueryParams:
    age_of_people: Optional[list[shared_ageofpeoplefiltertype_enum.AgeOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'age_of_people', 'style': 'form', 'explode': False }})
    artists: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    collection_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collection_codes', 'style': 'form', 'explode': False }})
    collections_filter_type: Optional[shared_collectionsfiltertype_enum.CollectionsFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collections_filter_type', 'style': 'form', 'explode': True }})
    compositions: Optional[list[shared_compositionsfiltertype_enum.CompositionsFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compositions', 'style': 'form', 'explode': False }})
    date_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download_product', 'style': 'form', 'explode': True }})
    editorial_segments: Optional[list[shared_editorialsegmentcontract_enum.EditorialSegmentContractEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'editorial_segments', 'style': 'form', 'explode': False }})
    embed_content_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed_content_only', 'style': 'form', 'explode': True }})
    entity_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_uris', 'style': 'form', 'explode': False }})
    ethnicity: Optional[list[shared_ethnicityfiltertype_enum.EthnicityFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': False }})
    event_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': False }})
    facet_fields: Optional[list[shared_editorialimagesearchfacetsfields_enum.EditorialImageSearchFacetsFieldsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': False }})
    facet_max_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_max_count', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_editorialimagesfieldvalues_enum.EditorialImagesFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    file_types: Optional[list[shared_searchfiletype_enum.SearchFileTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_types', 'style': 'form', 'explode': False }})
    graphical_styles: Optional[list[shared_editorialgraphicalstyle_enum.EditorialGraphicalStyleEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles', 'style': 'form', 'explode': False }})
    graphical_styles_filter_type: Optional[shared_graphicalstylesfiltertype_enum.GraphicalStylesFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graphical_styles_filter_type', 'style': 'form', 'explode': True }})
    include_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_facets', 'style': 'form', 'explode': True }})
    include_related_searches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_related_searches', 'style': 'form', 'explode': True }})
    keyword_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_ids', 'style': 'form', 'explode': False }})
    minimum_quality_rank: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimum_quality_rank', 'style': 'form', 'explode': True }})
    minimum_size: Optional[shared_teeshirtsize_enum.TeeShirtSizeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimum_size', 'style': 'form', 'explode': True }})
    number_of_people: Optional[list[shared_numberofpeoplefiltertype_enum.NumberOfPeopleFilterTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number_of_people', 'style': 'form', 'explode': False }})
    orientations: Optional[list[shared_orientationrequest_enum.OrientationRequestEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orientations', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    specific_people: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'specific_people', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesEditorialHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchImagesEditorialRequest:
    headers: GetV3SearchImagesEditorialHeaders = dataclasses.field()
    query_params: GetV3SearchImagesEditorialQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchImagesEditorialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_image_search_results: Optional[shared_editorialimagesearchresults.EditorialImageSearchResults] = dataclasses.field(default=None)
    

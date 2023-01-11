import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format_enum as shared_format_enum
from ..shared import api_key_enum as shared_api_key_enum
from ..shared import api_key_enum2 as shared_api_key_enum2
from ..shared import api_key_enum1 as shared_api_key_enum1
from ..shared import fields_enum1 as shared_fields_enum1
from ..shared import fields_enum2 as shared_fields_enum2
from ..shared import fields_enum as shared_fields_enum
from ..shared import record as shared_record


@dataclasses.dataclass
class GetRecordsFormatPathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRecordsFormatQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    and_category_: Optional[shared_api_key_enum.APIKeyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[category][]', 'style': 'form', 'explode': True }})
    and_century_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[century]', 'style': 'form', 'explode': True }})
    and_collection_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[collection][]', 'style': 'form', 'explode': True }})
    and_content_partner_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[content_partner][]', 'style': 'form', 'explode': True }})
    and_creator_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[creator][]', 'style': 'form', 'explode': True }})
    and_date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[date]', 'style': 'form', 'explode': True }})
    and_dc_type_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[dc_type][]', 'style': 'form', 'explode': True }})
    and_decade_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[decade]', 'style': 'form', 'explode': True }})
    and_format_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[format][]', 'style': 'form', 'explode': True }})
    and_has_large_thumbnail_url_: Optional[shared_api_key_enum2.APIKeyEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[has_large_thumbnail_url]', 'style': 'form', 'explode': True }})
    and_has_lat_lng_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[has_lat_lng]', 'style': 'form', 'explode': True }})
    and_is_commercial_use_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[is_commercial_use]', 'style': 'form', 'explode': True }})
    and_or_filter_field_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[or][{filter_field}][]', 'style': 'form', 'explode': True }})
    and_placename_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[placename][]', 'style': 'form', 'explode': True }})
    and_primary_collection_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[primary_collection][]', 'style': 'form', 'explode': True }})
    and_subject_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[subject][]', 'style': 'form', 'explode': True }})
    and_title_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[title][]', 'style': 'form', 'explode': True }})
    and_usage_: Optional[shared_api_key_enum1.APIKeyEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[usage][]', 'style': 'form', 'explode': True }})
    and_year_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'and[year]', 'style': 'form', 'explode': True }})
    direction: Optional[shared_fields_enum1.FieldsEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    exclude_filters_from_facets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_filters_from_facets', 'style': 'form', 'explode': True }})
    facets: Optional[list[shared_fields_enum2.FieldsEnum2]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': False }})
    facets_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets_page', 'style': 'form', 'explode': True }})
    facets_per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets_per_page', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    geo_bbox: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geo_bbox', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_fields_enum.FieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    without_filter_field_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'without[{filter_field}]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecordsFormat200ApplicationJSON:
    facets: Optional[dict[str, dict[str, int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    records: Optional[list[shared_record.Record]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_url') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    

@dataclasses.dataclass
class GetRecordsFormatRequest:
    path_params: GetRecordsFormatPathParams = dataclasses.field()
    query_params: GetRecordsFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecordsFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_records_format_200_application_json_object: Optional[GetRecordsFormat200ApplicationJSON] = dataclasses.field(default=None)
    get_records_format_400_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    get_records_format_403_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

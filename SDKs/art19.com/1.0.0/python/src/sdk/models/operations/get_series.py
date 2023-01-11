import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import series as shared_series
from ..shared import links as shared_links

class GetSeriesSortEnum(str, Enum):
    CREATED_AT = "created_at"
    EPISODE_RELEASED_AT = "episode_released_at"
    SORT_TITLE = "sort_title"
    TITLE = "title"
    UPDATED_AT = "updated_at"


@dataclasses.dataclass
class GetSeriesQueryParams:
    ad_rep_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ad_rep_account_id', 'style': 'form', 'explode': True }})
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    network_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'network_id', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetSeriesSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeries200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_series.Series]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeries400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetSeries400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeries400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetSeries400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeries400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetSeries400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetSeriesRequest:
    query_params: GetSeriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSeriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_series_200_application_vnd_api_plus_json_object: Optional[GetSeries200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_series_400_application_vnd_api_plus_json_object: Optional[GetSeries400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    

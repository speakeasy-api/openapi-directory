import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import episode as shared_episode
from ..shared import links as shared_links

class GetEpisodesSortEnum(str, Enum):
    CREATED_AT = "created_at"
    EARLIEST_RELEASED_AT = "earliest_released_at"
    RELEASED_AT = "released_at"
    RELEASED_OR_CREATED_AT = "released_or_created_at"
    SORT_TITLE = "sort_title"
    TITLE = "title"
    UPDATED_AT = "updated_at"


@dataclasses.dataclass
class GetEpisodesQueryParams:
    page_number_: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    included_in_inventory_calendar: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'included_in_inventory_calendar', 'style': 'form', 'explode': True }})
    month: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    published: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    released_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'released_after', 'style': 'form', 'explode': True }})
    released_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'released_before', 'style': 'form', 'explode': True }})
    rss: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rss', 'style': 'form', 'explode': True }})
    season_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'season_id', 'style': 'form', 'explode': True }})
    series_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'series_id', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetEpisodesSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetEpisodes200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_episode.Episode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEpisodes400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEpisodes400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetEpisodes400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetEpisodesRequest:
    query_params: GetEpisodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEpisodesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_episodes_200_application_vnd_api_plus_json_object: Optional[GetEpisodes200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_episodes_400_application_vnd_api_plus_json_object: Optional[GetEpisodes400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    

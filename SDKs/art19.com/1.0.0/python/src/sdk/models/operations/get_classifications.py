import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classification as shared_classification
from ..shared import links as shared_links

class GetClassificationsSortEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    VALUE = "value"

class GetClassificationsTypeEnum(str, Enum):
    ALTERNATE_FEED_TYPE = "AlternateFeedType"
    GENRE = "Genre"
    INDUSTRY = "Industry"
    LANGUAGE = "Language"
    MEDIA_RATING = "MediaRating"


@dataclasses.dataclass
class GetClassificationsQueryParams:
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    is_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_country', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetClassificationsSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    type: Optional[GetClassificationsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassifications200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_classification.Classification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassifications400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetClassifications400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassifications400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetClassifications400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassifications400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetClassifications400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetClassificationsRequest:
    query_params: GetClassificationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClassificationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_classifications_200_application_vnd_api_plus_json_object: Optional[GetClassifications200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_classifications_400_application_vnd_api_plus_json_object: Optional[GetClassifications400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    

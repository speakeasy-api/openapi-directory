import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person
from ..shared import links as shared_links

class GetPeopleSortEnum(str, Enum):
    CREATED_AT = "created_at"
    FIRST_NAME = "first_name"
    LAST_NAME = "last_name"
    UPDATED_AT = "updated_at"


@dataclasses.dataclass
class GetPeopleQueryParams:
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetPeopleSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetPeople200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_person.Person]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPeople400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetPeople400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPeople400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetPeople400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPeople400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetPeople400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetPeopleRequest:
    query_params: GetPeopleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPeopleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_people_200_application_vnd_api_plus_json_object: Optional[GetPeople200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_people_400_application_vnd_api_plus_json_object: Optional[GetPeople400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import credit as shared_credit
from ..shared import links as shared_links

class GetCreditsCreditableTypeEnum(str, Enum):
    SERIES = "Series"
    SEASON = "Season"
    EPISODE = "Episode"

class GetCreditsSortEnum(str, Enum):
    CREATED_AT = "created_at"
    POSITION = "position"
    UPDATED_AT = "updated_at"


@dataclasses.dataclass
class GetCreditsQueryParams:
    creditable_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creditable_id', 'style': 'form', 'explode': True }})
    creditable_type: Optional[GetCreditsCreditableTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creditable_type', 'style': 'form', 'explode': True }})
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetCreditsSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredits200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_credit.Credit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredits400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetCredits400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredits400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetCredits400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredits400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetCredits400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetCreditsRequest:
    query_params: GetCreditsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credits_200_application_vnd_api_plus_json_object: Optional[GetCredits200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_credits_400_application_vnd_api_plus_json_object: Optional[GetCredits400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListAuthorsOfPadUsingGetQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingGet200ApplicationJSONData:
    author_i_ds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorIDs') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListAuthorsOfPadUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListAuthorsOfPadUsingGetRequest:
    query_params: ListAuthorsOfPadUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAuthorsOfPadUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_authors_of_pad_using_get_200_application_json_object: Optional[ListAuthorsOfPadUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_get_400_application_json_object: Optional[ListAuthorsOfPadUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_get_401_application_json_object: Optional[ListAuthorsOfPadUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_get_500_application_json_object: Optional[ListAuthorsOfPadUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

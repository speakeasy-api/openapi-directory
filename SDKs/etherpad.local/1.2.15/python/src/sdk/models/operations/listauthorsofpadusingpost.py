import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListAuthorsOfPadUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingPost200ApplicationJSONData:
    author_i_ds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorIDs') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListAuthorsOfPadUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorsOfPadUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListAuthorsOfPadUsingPostRequest:
    query_params: ListAuthorsOfPadUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAuthorsOfPadUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_authors_of_pad_using_post_200_application_json_object: Optional[ListAuthorsOfPadUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_post_400_application_json_object: Optional[ListAuthorsOfPadUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_post_401_application_json_object: Optional[ListAuthorsOfPadUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    list_authors_of_pad_using_post_500_application_json_object: Optional[ListAuthorsOfPadUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

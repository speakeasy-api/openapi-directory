import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListPadsOfAuthorUsingPostQueryParams:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListPadsOfAuthorUsingPost200ApplicationJSONData:
    pad_i_ds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padIDs') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPadsOfAuthorUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListPadsOfAuthorUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPadsOfAuthorUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPadsOfAuthorUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPadsOfAuthorUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListPadsOfAuthorUsingPostRequest:
    query_params: ListPadsOfAuthorUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPadsOfAuthorUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_pads_of_author_using_post_200_application_json_object: Optional[ListPadsOfAuthorUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    list_pads_of_author_using_post_400_application_json_object: Optional[ListPadsOfAuthorUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    list_pads_of_author_using_post_401_application_json_object: Optional[ListPadsOfAuthorUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    list_pads_of_author_using_post_500_application_json_object: Optional[ListPadsOfAuthorUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

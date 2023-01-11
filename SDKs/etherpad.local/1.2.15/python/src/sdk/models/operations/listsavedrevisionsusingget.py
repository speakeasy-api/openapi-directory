import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListSavedRevisionsUsingGetQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListSavedRevisionsUsingGetRequest:
    query_params: ListSavedRevisionsUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSavedRevisionsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_saved_revisions_using_get_200_application_json_object: Optional[ListSavedRevisionsUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_get_400_application_json_object: Optional[ListSavedRevisionsUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_get_401_application_json_object: Optional[ListSavedRevisionsUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_get_500_application_json_object: Optional[ListSavedRevisionsUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

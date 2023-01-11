import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListSavedRevisionsUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSavedRevisionsUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListSavedRevisionsUsingPostRequest:
    query_params: ListSavedRevisionsUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSavedRevisionsUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_saved_revisions_using_post_200_application_json_object: Optional[ListSavedRevisionsUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_post_400_application_json_object: Optional[ListSavedRevisionsUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_post_401_application_json_object: Optional[ListSavedRevisionsUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    list_saved_revisions_using_post_500_application_json_object: Optional[ListSavedRevisionsUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

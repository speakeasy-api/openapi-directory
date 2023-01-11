import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetSavedRevisionsCountUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSavedRevisionsCountUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSavedRevisionsCountUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSavedRevisionsCountUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSavedRevisionsCountUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetSavedRevisionsCountUsingPostRequest:
    query_params: GetSavedRevisionsCountUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSavedRevisionsCountUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_saved_revisions_count_using_post_200_application_json_object: Optional[GetSavedRevisionsCountUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    get_saved_revisions_count_using_post_400_application_json_object: Optional[GetSavedRevisionsCountUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    get_saved_revisions_count_using_post_401_application_json_object: Optional[GetSavedRevisionsCountUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    get_saved_revisions_count_using_post_500_application_json_object: Optional[GetSavedRevisionsCountUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetRevisionsCountUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetRevisionsCountUsingPost200ApplicationJSONData:
    revisions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRevisionsCountUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetRevisionsCountUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRevisionsCountUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRevisionsCountUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRevisionsCountUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRevisionsCountUsingPostRequest:
    query_params: GetRevisionsCountUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevisionsCountUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revisions_count_using_post_200_application_json_object: Optional[GetRevisionsCountUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    get_revisions_count_using_post_400_application_json_object: Optional[GetRevisionsCountUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    get_revisions_count_using_post_401_application_json_object: Optional[GetRevisionsCountUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    get_revisions_count_using_post_500_application_json_object: Optional[GetRevisionsCountUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

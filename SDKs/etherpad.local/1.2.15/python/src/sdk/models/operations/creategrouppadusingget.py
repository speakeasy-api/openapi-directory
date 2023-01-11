import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateGroupPadUsingGetQueryParams:
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    pad_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padName', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupPadUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupPadUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupPadUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupPadUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateGroupPadUsingGetRequest:
    query_params: CreateGroupPadUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateGroupPadUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_pad_using_get_200_application_json_object: Optional[CreateGroupPadUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    create_group_pad_using_get_400_application_json_object: Optional[CreateGroupPadUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    create_group_pad_using_get_401_application_json_object: Optional[CreateGroupPadUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    create_group_pad_using_get_500_application_json_object: Optional[CreateGroupPadUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

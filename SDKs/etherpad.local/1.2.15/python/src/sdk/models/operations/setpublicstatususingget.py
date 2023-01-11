import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SetPublicStatusUsingGetQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    public_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publicStatus', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SetPublicStatusUsingGetRequest:
    query_params: SetPublicStatusUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SetPublicStatusUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_public_status_using_get_200_application_json_object: Optional[SetPublicStatusUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_get_400_application_json_object: Optional[SetPublicStatusUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_get_401_application_json_object: Optional[SetPublicStatusUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_get_500_application_json_object: Optional[SetPublicStatusUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

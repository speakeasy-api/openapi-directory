import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SendClientsMessageUsingGetQueryParams:
    msg: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msg', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SendClientsMessageUsingGetRequest:
    query_params: SendClientsMessageUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SendClientsMessageUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_clients_message_using_get_200_application_json_object: Optional[SendClientsMessageUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_get_400_application_json_object: Optional[SendClientsMessageUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_get_401_application_json_object: Optional[SendClientsMessageUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_get_500_application_json_object: Optional[SendClientsMessageUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

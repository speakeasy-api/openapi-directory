import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SendClientsMessageUsingPostQueryParams:
    msg: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'msg', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SendClientsMessageUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SendClientsMessageUsingPostRequest:
    query_params: SendClientsMessageUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SendClientsMessageUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_clients_message_using_post_200_application_json_object: Optional[SendClientsMessageUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_post_400_application_json_object: Optional[SendClientsMessageUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_post_401_application_json_object: Optional[SendClientsMessageUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    send_clients_message_using_post_500_application_json_object: Optional[SendClientsMessageUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

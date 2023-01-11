import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetContainersMessagesHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetContainersMessages200ApplicationJSON:
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetContainersMessagesRequest:
    headers: GetContainersMessagesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_containers_messages_200_application_json_object: Optional[GetContainersMessages200ApplicationJSON] = dataclasses.field(default=None)
    

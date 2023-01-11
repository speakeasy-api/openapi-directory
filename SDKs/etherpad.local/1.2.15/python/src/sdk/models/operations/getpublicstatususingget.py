import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPublicStatusUsingGetQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingGet200ApplicationJSONData:
    public_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetPublicStatusUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetPublicStatusUsingGetRequest:
    query_params: GetPublicStatusUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicStatusUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_public_status_using_get_200_application_json_object: Optional[GetPublicStatusUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_get_400_application_json_object: Optional[GetPublicStatusUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_get_401_application_json_object: Optional[GetPublicStatusUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_get_500_application_json_object: Optional[GetPublicStatusUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    

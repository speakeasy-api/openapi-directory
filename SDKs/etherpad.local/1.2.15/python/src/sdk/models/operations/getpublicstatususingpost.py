import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPublicStatusUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingPost200ApplicationJSONData:
    public_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetPublicStatusUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPublicStatusUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetPublicStatusUsingPostRequest:
    query_params: GetPublicStatusUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicStatusUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_public_status_using_post_200_application_json_object: Optional[GetPublicStatusUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_post_400_application_json_object: Optional[GetPublicStatusUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_post_401_application_json_object: Optional[GetPublicStatusUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    get_public_status_using_post_500_application_json_object: Optional[GetPublicStatusUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    

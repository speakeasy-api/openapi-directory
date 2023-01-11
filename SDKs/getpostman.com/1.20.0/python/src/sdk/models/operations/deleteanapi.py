import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteAnAPIPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAnAPI200ApplicationJSONAPI:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAnAPI200ApplicationJSON:
    api: Optional[DeleteAnAPI200ApplicationJSONAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    

@dataclasses.dataclass
class DeleteAnAPIRequest:
    path_params: DeleteAnAPIPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAnAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_an_api_200_application_json_object: Optional[DeleteAnAPI200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteEnvironmentPathParams:
    environment_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteEnvironment200ApplicationJSON:
    environment: Optional[DeleteEnvironment200ApplicationJSONEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteEnvironment404ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteEnvironment404ApplicationJSON:
    error: Optional[DeleteEnvironment404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_environment_200_application_json_object: Optional[DeleteEnvironment200ApplicationJSON] = dataclasses.field(default=None)
    delete_environment_404_application_json_object: Optional[DeleteEnvironment404ApplicationJSON] = dataclasses.field(default=None)
    

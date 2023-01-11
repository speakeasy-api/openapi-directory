import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SingleEnvironmentPathParams:
    environment_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SingleEnvironment200ApplicationJSONEnvironmentValues:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    hovered: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hovered') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[SingleEnvironment200ApplicationJSONEnvironmentValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleEnvironment200ApplicationJSON:
    environment: Optional[SingleEnvironment200ApplicationJSONEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclasses.dataclass
class SingleEnvironmentRequest:
    path_params: SingleEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SingleEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    single_environment_200_application_json_object: Optional[SingleEnvironment200ApplicationJSON] = dataclasses.field(default=None)
    

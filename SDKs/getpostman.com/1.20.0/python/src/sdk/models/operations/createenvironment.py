import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBodyEnvironmentValues:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBodyEnvironment:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[CreateEnvironmentRequestBodyEnvironmentValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentRequestBody:
    environment: Optional[CreateEnvironmentRequestBodyEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironment200ApplicationJSONEnvironment:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironment200ApplicationJSON:
    environment: Optional[CreateEnvironment200ApplicationJSONEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironment400ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEnvironment400ApplicationJSON:
    error: Optional[CreateEnvironment400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class CreateEnvironmentRequest:
    request: Optional[CreateEnvironmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_environment_200_application_json_object: Optional[CreateEnvironment200ApplicationJSON] = dataclasses.field(default=None)
    create_environment_400_application_json_object: Optional[CreateEnvironment400ApplicationJSON] = dataclasses.field(default=None)
    

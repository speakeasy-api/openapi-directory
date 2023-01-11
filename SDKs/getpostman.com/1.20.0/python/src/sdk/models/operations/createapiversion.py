import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateAPIVersionPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersionRequestBodyVersionSourceRelations:
    documentation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    mock: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    monitor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersionRequestBodyVersionSource:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relations: Optional[CreateAPIVersionRequestBodyVersionSourceRelations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    schema: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersionRequestBodyVersion:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Optional[CreateAPIVersionRequestBodyVersionSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersionRequestBody:
    version: Optional[CreateAPIVersionRequestBodyVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAPIVersion200ApplicationJSON:
    version: Optional[CreateAPIVersion200ApplicationJSONVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclasses.dataclass
class CreateAPIVersionRequest:
    path_params: CreateAPIVersionPathParams = dataclasses.field()
    request: Optional[CreateAPIVersionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_api_version_200_application_json_object: Optional[CreateAPIVersion200ApplicationJSON] = dataclasses.field(default=None)
    

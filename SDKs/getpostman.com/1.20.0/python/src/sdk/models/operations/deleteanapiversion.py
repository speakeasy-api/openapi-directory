import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteAnAPIVersionPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAnAPIVersion200ApplicationJSONVersion:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAnAPIVersion200ApplicationJSON:
    version: Optional[DeleteAnAPIVersion200ApplicationJSONVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclasses.dataclass
class DeleteAnAPIVersionRequest:
    path_params: DeleteAnAPIVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAnAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_an_api_version_200_application_json_object: Optional[DeleteAnAPIVersion200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateAnAPIVersionPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIVersionRequestBodyVersion:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIVersionRequestBody:
    version: Optional[UpdateAnAPIVersionRequestBodyVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIVersion200ApplicationJSONVersion:
    api: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIVersion200ApplicationJSON:
    version: Optional[UpdateAnAPIVersion200ApplicationJSONVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclasses.dataclass
class UpdateAnAPIVersionRequest:
    path_params: UpdateAnAPIVersionPathParams = dataclasses.field()
    request: Optional[UpdateAnAPIVersionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAnAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_an_api_version_200_application_json_object: Optional[UpdateAnAPIVersion200ApplicationJSON] = dataclasses.field(default=None)
    

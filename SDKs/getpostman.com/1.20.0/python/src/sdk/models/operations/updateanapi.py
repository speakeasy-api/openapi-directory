import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateAnAPIPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIRequestBodyAPI:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPIRequestBody:
    api: Optional[UpdateAnAPIRequestBodyAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPI200ApplicationJSONAPI:
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnAPI200ApplicationJSON:
    api: Optional[UpdateAnAPI200ApplicationJSONAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    

@dataclasses.dataclass
class UpdateAnAPIRequest:
    path_params: UpdateAnAPIPathParams = dataclasses.field()
    request: Optional[UpdateAnAPIRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAnAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_an_api_200_application_json_object: Optional[UpdateAnAPI200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetEnvironmentRelationsPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetEnvironmentRelations200ApplicationJSONEnvironment:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEnvironmentRelations200ApplicationJSON:
    environment: Optional[list[GetEnvironmentRelations200ApplicationJSONEnvironment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclasses.dataclass
class GetEnvironmentRelationsRequest:
    path_params: GetEnvironmentRelationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnvironmentRelationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_environment_relations_200_application_json_object: Optional[GetEnvironmentRelations200ApplicationJSON] = dataclasses.field(default=None)
    

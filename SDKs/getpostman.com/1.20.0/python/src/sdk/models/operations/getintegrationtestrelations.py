import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetIntegrationTestRelationsPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationTestRelations200ApplicationJSONIntegrationtest:
    collection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationTestRelations200ApplicationJSON:
    integrationtest: Optional[list[GetIntegrationTestRelations200ApplicationJSONIntegrationtest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationtest') }})
    

@dataclasses.dataclass
class GetIntegrationTestRelationsRequest:
    path_params: GetIntegrationTestRelationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationTestRelationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_integration_test_relations_200_application_json_object: Optional[GetIntegrationTestRelations200ApplicationJSON] = dataclasses.field(default=None)
    

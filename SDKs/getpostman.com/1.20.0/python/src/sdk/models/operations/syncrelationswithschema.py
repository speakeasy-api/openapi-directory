import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SyncRelationsWithSchemaPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    entity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    entity_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'entityType', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SyncRelationsWithSchema200ApplicationJSON:
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclasses.dataclass
class SyncRelationsWithSchema400ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SyncRelationsWithSchema400ApplicationJSON:
    error: Optional[SyncRelationsWithSchema400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class SyncRelationsWithSchemaRequest:
    path_params: SyncRelationsWithSchemaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SyncRelationsWithSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_relations_with_schema_200_application_json_object: Optional[SyncRelationsWithSchema200ApplicationJSON] = dataclasses.field(default=None)
    sync_relations_with_schema_400_application_json_object: Optional[SyncRelationsWithSchema400ApplicationJSON] = dataclasses.field(default=None)
    

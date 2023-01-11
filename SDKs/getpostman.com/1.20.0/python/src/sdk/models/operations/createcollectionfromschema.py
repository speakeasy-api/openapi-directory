import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateCollectionFromSchemaPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    schema_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schemaId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCollectionFromSchemaQueryParams:
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCollectionFromSchemaRequestBodyRelations:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCollectionFromSchemaRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relations: Optional[list[CreateCollectionFromSchemaRequestBodyRelations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCollectionFromSchema200ApplicationJSONCollection:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCollectionFromSchema200ApplicationJSONRelations:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCollectionFromSchema200ApplicationJSON:
    collection: Optional[CreateCollectionFromSchema200ApplicationJSONCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    relations: Optional[list[CreateCollectionFromSchema200ApplicationJSONRelations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    

@dataclasses.dataclass
class CreateCollectionFromSchemaRequest:
    path_params: CreateCollectionFromSchemaPathParams = dataclasses.field()
    query_params: CreateCollectionFromSchemaQueryParams = dataclasses.field()
    request: Optional[CreateCollectionFromSchemaRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCollectionFromSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_collection_from_schema_200_application_json_object: Optional[CreateCollectionFromSchema200ApplicationJSON] = dataclasses.field(default=None)
    

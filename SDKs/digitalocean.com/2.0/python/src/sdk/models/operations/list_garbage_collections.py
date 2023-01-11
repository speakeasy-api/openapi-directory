import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1registry_1percent_7bregistry_namepercent_7d_1garbage_collection_post_responses_201_content_application_1json_schema_properties_garbage_collection as shared_onev2_1registry_1percent_7bregistry_namepercent_7d_1garbage_collection_post_responses_201_content_application_1json_schema_properties_garbage_collection
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListGarbageCollectionsPathParams:
    registry_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListGarbageCollectionsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListGarbageCollections200ApplicationJSON:
    garbage_collections: Optional[list[shared_onev2_1registry_1percent_7bregistry_namepercent_7d_1garbage_collection_post_responses_201_content_application_1json_schema_properties_garbage_collection.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('garbage_collections') }})
    

@dataclass_json
@dataclasses.dataclass
class ListGarbageCollections401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListGarbageCollectionsRequest:
    path_params: ListGarbageCollectionsPathParams = dataclasses.field()
    query_params: ListGarbageCollectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListGarbageCollectionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_garbage_collections_200_application_json_object: Optional[ListGarbageCollections200ApplicationJSON] = dataclasses.field(default=None)
    list_garbage_collections_401_application_json_object: Optional[ListGarbageCollections401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

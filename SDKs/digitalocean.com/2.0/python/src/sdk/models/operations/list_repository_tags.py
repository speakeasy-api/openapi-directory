import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1registry_1percent_7bregistry_namepercent_7d_get_responses_200_content_application_1json_schema_allof_0_properties_repositories_items_properties_latest_tag as shared_onev2_1registry_1percent_7bregistry_namepercent_7d_get_responses_200_content_application_1json_schema_allof_0_properties_repositories_items_properties_latest_tag
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListRepositoryTagsPathParams:
    registry_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    repository_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRepositoryTagsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags200ApplicationJSONMeta:
    r"""ListRepositoryTags200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags200ApplicationJSON:
    meta: ListRepositoryTags200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    links: Optional[ListRepositoryTags200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    tags: Optional[list[shared_onev2_1registry_1percent_7bregistry_namepercent_7d_get_responses_200_content_application_1json_schema_allof_0_properties_repositories_items_properties_latest_tag.Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRepositoryTags401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListRepositoryTagsRequest:
    path_params: ListRepositoryTagsPathParams = dataclasses.field()
    query_params: ListRepositoryTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListRepositoryTagsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_repository_tags_200_application_json_object: Optional[ListRepositoryTags200ApplicationJSON] = dataclasses.field(default=None)
    list_repository_tags_401_application_json_object: Optional[ListRepositoryTags401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

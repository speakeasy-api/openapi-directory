import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topic_search_result_item as shared_topic_search_result_item


@dataclasses.dataclass
class SearchTopicsQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchTopics200ApplicationJSON:
    incomplete_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: list[shared_topic_search_result_item.TopicSearchResultItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchTopics415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SearchTopicsRequest:
    query_params: SearchTopicsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchTopicsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_topics_200_application_json_object: Optional[SearchTopics200ApplicationJSON] = dataclasses.field(default=None)
    search_topics_415_application_json_object: Optional[SearchTopics415ApplicationJSON] = dataclasses.field(default=None)
    

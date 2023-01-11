import dataclasses
from typing import Optional
from ..shared import onealmaws_1v1_1task_lists_1requested_resources_get_responses_200_content_application_1json_schema as shared_onealmaws_1v1_1task_lists_1requested_resources_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class PostAlmawsV1TaskListsRequestedResourcesQueryParams:
    circ_desk: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'circ_desk', 'style': 'form', 'explode': True }})
    library: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'library', 'style': 'form', 'explode': True }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    op: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'op', 'style': 'form', 'explode': True }})
    pickup_inst: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pickup_inst', 'style': 'form', 'explode': True }})
    printed: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printed', 'style': 'form', 'explode': True }})
    reported: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reported', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsRequestedResourcesRequest:
    query_params: PostAlmawsV1TaskListsRequestedResourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsRequestedResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    onealmaws_1v1_1task_lists_1requested_resources_get_responses_200_content_application_1json_schema: Optional[shared_onealmaws_1v1_1task_lists_1requested_resources_get_responses_200_content_application_1json_schema.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

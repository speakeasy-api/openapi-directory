import dataclasses
from typing import Optional
from ..shared import onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items as shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items


@dataclasses.dataclass
class PostAlmawsV1TaskListsRsLendingRequestsQueryParams:
    library: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'library', 'style': 'form', 'explode': True }})
    op: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'op', 'style': 'form', 'explode': True }})
    partner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    printed: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printed', 'style': 'form', 'explode': True }})
    reported: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reported', 'style': 'form', 'explode': True }})
    requested_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requested_format', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    supplied_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supplied_format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsRsLendingRequestsRequest:
    query_params: PostAlmawsV1TaskListsRsLendingRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsRsLendingRequestsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items: Optional[shared_onealmaws_1v1_1task_lists_1rs_1lending_requests_get_responses_200_content_application_1json_schema_properties_user_resource_sharing_request_items.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems] = dataclasses.field(default=None)
    

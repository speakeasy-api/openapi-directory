import dataclasses
from typing import Optional
from ..shared import oneusers_get_responses_200_content_application_1json_schema_items as shared_oneusers_get_responses_200_content_application_1json_schema_items


@dataclasses.dataclass
class GetUserPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserRequest:
    path_params: GetUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneusers_get_responses_200_content_application_1json_schema_items: Optional[shared_oneusers_get_responses_200_content_application_1json_schema_items.OneusersGetResponses200ContentApplication1jsonSchemaItems] = dataclasses.field(default=None)
    

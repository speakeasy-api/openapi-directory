import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import oneorders_get_responses_404_content_application_1json_schema as shared_oneorders_get_responses_404_content_application_1json_schema
from ..shared import oneorders_post_responses_201_content_application_1json_schema as shared_oneorders_post_responses_201_content_application_1json_schema


@dataclasses.dataclass
class DeleteOrdersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrdersIDSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteOrdersIDRequest:
    path_params: DeleteOrdersIDPathParams = dataclasses.field()
    security: DeleteOrdersIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrdersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared_oneorders_get_responses_404_content_application_1json_schema.OneordersGetResponses404ContentApplication1jsonSchema] = dataclasses.field(default=None)
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared_oneorders_post_responses_201_content_application_1json_schema.OneordersPostResponses201ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

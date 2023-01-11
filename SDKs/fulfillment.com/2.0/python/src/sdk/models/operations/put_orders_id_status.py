import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import oneorders_post_responses_201_content_application_1json_schema as shared_oneorders_post_responses_201_content_application_1json_schema


@dataclasses.dataclass
class PutOrdersIDStatusPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrdersIDStatusStatusTypeSimpleV2Status:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrdersIDStatusStatusTypeSimpleV2:
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: PutOrdersIDStatusStatusTypeSimpleV2Status = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class PutOrdersIDStatusSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutOrdersIDStatusRequest:
    path_params: PutOrdersIDStatusPathParams = dataclasses.field()
    request: PutOrdersIDStatusStatusTypeSimpleV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutOrdersIDStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared_oneorders_post_responses_201_content_application_1json_schema.OneordersPostResponses201ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

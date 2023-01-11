import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import oneorders_post_responses_201_content_application_1json_schema as shared_oneorders_post_responses_201_content_application_1json_schema


@dataclasses.dataclass
class PutOrdersIDShipPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrdersIDShipOrderShipV2:
    tracking_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumber') }})
    weight_override: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightOverride') }})
    

@dataclasses.dataclass
class PutOrdersIDShipSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutOrdersIDShipRequest:
    path_params: PutOrdersIDShipPathParams = dataclasses.field()
    request: PutOrdersIDShipOrderShipV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDShipSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutOrdersIDShipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared_oneorders_post_responses_201_content_application_1json_schema.OneordersPostResponses201ContentApplication1jsonSchema] = dataclasses.field(default=None)
    

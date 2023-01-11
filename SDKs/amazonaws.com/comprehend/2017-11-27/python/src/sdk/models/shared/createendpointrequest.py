import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateEndpointRequest:
    desired_inference_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInferenceUnits') }})
    endpoint_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    model_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    data_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import antenna as shared_antenna
from ..shared import environment as shared_environment
from ..shared import model as shared_model
from ..shared import output as shared_output
from ..shared import point as shared_point
from ..shared import receiver as shared_receiver
from ..shared import transmitter as shared_transmitter
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class PointsRequestBody:
    antenna: Optional[shared_antenna.Antenna] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antenna') }})
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    model: Optional[shared_model.Model] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    output: Optional[shared_output.Output] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    points: Optional[list[shared_point.Point]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    receiver: Optional[shared_receiver.Receiver] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiver') }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    transmitter: Optional[shared_transmitter.Transmitter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmitter') }})
    

@dataclasses.dataclass
class PointsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PointsRequest:
    request: PointsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PointsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

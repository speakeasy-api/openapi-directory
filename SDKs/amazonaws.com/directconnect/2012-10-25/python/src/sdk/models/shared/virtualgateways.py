import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgateway as shared_virtualgateway


@dataclass_json
@dataclasses.dataclass
class VirtualGateways:
    virtual_gateways: Optional[list[shared_virtualgateway.VirtualGateway]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGateways') }})
    

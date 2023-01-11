import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayref as shared_virtualgatewayref


@dataclass_json
@dataclasses.dataclass
class ListVirtualGatewaysOutput:
    virtual_gateways: list[shared_virtualgatewayref.VirtualGatewayRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGateways') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

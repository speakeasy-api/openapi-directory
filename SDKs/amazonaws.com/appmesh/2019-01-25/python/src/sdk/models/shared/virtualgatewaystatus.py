import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaystatuscode_enum as shared_virtualgatewaystatuscode_enum


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayStatus:
    r"""VirtualGatewayStatus
    An object that represents the status of the mesh resource.
    """
    
    status: shared_virtualgatewaystatuscode_enum.VirtualGatewayStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

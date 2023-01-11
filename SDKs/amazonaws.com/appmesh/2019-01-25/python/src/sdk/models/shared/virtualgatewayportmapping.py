import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayportprotocol_enum as shared_virtualgatewayportprotocol_enum


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayPortMapping:
    r"""VirtualGatewayPortMapping
    An object that represents a port mapping.
    """
    
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: shared_virtualgatewayportprotocol_enum.VirtualGatewayPortProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

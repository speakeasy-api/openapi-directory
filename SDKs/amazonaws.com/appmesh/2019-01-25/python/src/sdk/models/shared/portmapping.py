import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portprotocol_enum as shared_portprotocol_enum


@dataclass_json
@dataclasses.dataclass
class PortMapping:
    r"""PortMapping
    An object that represents a port mapping.
    """
    
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: shared_portprotocol_enum.PortProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

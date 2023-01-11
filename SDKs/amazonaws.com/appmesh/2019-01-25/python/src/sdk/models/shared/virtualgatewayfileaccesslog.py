import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayFileAccessLog:
    r"""VirtualGatewayFileAccessLog
    An object that represents an access log file.
    """
    
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

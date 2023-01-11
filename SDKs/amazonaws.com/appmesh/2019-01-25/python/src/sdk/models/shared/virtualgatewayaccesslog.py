import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayfileaccesslog as shared_virtualgatewayfileaccesslog


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayAccessLog:
    r"""VirtualGatewayAccessLog
    The access log configuration for a virtual gateway.
    """
    
    file: Optional[shared_virtualgatewayfileaccesslog.VirtualGatewayFileAccessLog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    

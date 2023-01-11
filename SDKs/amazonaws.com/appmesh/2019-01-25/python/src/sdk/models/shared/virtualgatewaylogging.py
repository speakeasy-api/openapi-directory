import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayaccesslog as shared_virtualgatewayaccesslog


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayLogging:
    r"""VirtualGatewayLogging
    An object that represents logging information.
    """
    
    access_log: Optional[shared_virtualgatewayaccesslog.VirtualGatewayAccessLog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLog') }})
    

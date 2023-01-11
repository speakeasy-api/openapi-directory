import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaybackenddefaults as shared_virtualgatewaybackenddefaults
from ..shared import virtualgatewaylistener as shared_virtualgatewaylistener
from ..shared import virtualgatewaylogging as shared_virtualgatewaylogging


@dataclass_json
@dataclasses.dataclass
class VirtualGatewaySpec:
    r"""VirtualGatewaySpec
    An object that represents the specification of a service mesh resource.
    """
    
    listeners: list[shared_virtualgatewaylistener.VirtualGatewayListener] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    backend_defaults: Optional[shared_virtualgatewaybackenddefaults.VirtualGatewayBackendDefaults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendDefaults') }})
    logging: Optional[shared_virtualgatewaylogging.VirtualGatewayLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GatewayRouteHostnameMatch:
    r"""GatewayRouteHostnameMatch
    An object representing the gateway route host name to match.
    """
    
    exact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    

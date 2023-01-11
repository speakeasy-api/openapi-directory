import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomerConnectorInfo:
    r"""CustomerConnectorInfo
    Inventory data for installed discovery connectors.
    """
    
    active_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConnectors') }})
    black_listed_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blackListedConnectors') }})
    healthy_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyConnectors') }})
    shutdown_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownConnectors') }})
    total_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalConnectors') }})
    unhealthy_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyConnectors') }})
    unknown_connectors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownConnectors') }})
    

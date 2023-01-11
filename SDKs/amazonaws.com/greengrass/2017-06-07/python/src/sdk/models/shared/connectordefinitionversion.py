import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connector as shared_connector


@dataclass_json
@dataclasses.dataclass
class ConnectorDefinitionVersion:
    r"""ConnectorDefinitionVersion
    Information about the connector definition version, which is a container for connectors.
    """
    
    connectors: Optional[list[shared_connector.Connector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connectors') }})
    

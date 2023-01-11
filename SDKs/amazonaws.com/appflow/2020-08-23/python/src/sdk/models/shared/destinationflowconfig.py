import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectortype_enum as shared_connectortype_enum
from ..shared import destinationconnectorproperties as shared_destinationconnectorproperties


@dataclass_json
@dataclasses.dataclass
class DestinationFlowConfig:
    r"""DestinationFlowConfig
     Contains information about the configuration of destination connectors present in the flow. 
    """
    
    connector_type: shared_connectortype_enum.ConnectorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    destination_connector_properties: shared_destinationconnectorproperties.DestinationConnectorProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConnectorProperties') }})
    connector_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorentity as shared_connectorentity


@dataclass_json
@dataclasses.dataclass
class ListConnectorEntitiesResponse:
    connector_entity_map: dict[str, list[shared_connectorentity.ConnectorEntity]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorEntityMap') }})
    

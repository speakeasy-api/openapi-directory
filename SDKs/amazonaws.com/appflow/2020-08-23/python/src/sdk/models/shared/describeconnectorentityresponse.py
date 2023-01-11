import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorentityfield as shared_connectorentityfield


@dataclass_json
@dataclasses.dataclass
class DescribeConnectorEntityResponse:
    connector_entity_fields: list[shared_connectorentityfield.ConnectorEntityField] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorEntityFields') }})
    

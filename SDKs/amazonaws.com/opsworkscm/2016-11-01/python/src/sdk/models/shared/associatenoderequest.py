import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineattribute as shared_engineattribute


@dataclass_json
@dataclasses.dataclass
class AssociateNodeRequest:
    engine_attributes: list[shared_engineattribute.EngineAttribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeName') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    

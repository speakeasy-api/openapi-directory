import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineattribute as shared_engineattribute


@dataclass_json
@dataclasses.dataclass
class StartMaintenanceRequest:
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    engine_attributes: Optional[list[shared_engineattribute.EngineAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    

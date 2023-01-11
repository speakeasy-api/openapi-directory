import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import server as shared_server


@dataclass_json
@dataclasses.dataclass
class StartMaintenanceResponse:
    server: Optional[shared_server.Server] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Server') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineattribute as shared_engineattribute


@dataclass_json
@dataclasses.dataclass
class ExportServerEngineAttributeResponse:
    engine_attribute: Optional[shared_engineattribute.EngineAttribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttribute') }})
    server_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    

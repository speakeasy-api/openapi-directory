import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runconfiguration as shared_runconfiguration


@dataclass_json
@dataclasses.dataclass
class StartApplicationRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    run_configuration: Optional[shared_runconfiguration.RunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfiguration') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backendenvironment as shared_backendenvironment


@dataclass_json
@dataclasses.dataclass
class ListBackendEnvironmentsResult:
    r"""ListBackendEnvironmentsResult
     The result structure for the list backend environments result. 
    """
    
    backend_environments: list[shared_backendenvironment.BackendEnvironment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

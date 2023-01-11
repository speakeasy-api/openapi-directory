import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backendenvironment as shared_backendenvironment


@dataclass_json
@dataclasses.dataclass
class CreateBackendEnvironmentResult:
    r"""CreateBackendEnvironmentResult
     The result structure for the create backend environment request. 
    """
    
    backend_environment: shared_backendenvironment.BackendEnvironment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironment') }})
    

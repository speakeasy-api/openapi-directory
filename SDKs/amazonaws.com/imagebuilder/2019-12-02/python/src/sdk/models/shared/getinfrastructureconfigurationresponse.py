import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import infrastructureconfiguration as shared_infrastructureconfiguration


@dataclass_json
@dataclasses.dataclass
class GetInfrastructureConfigurationResponse:
    r"""GetInfrastructureConfigurationResponse
    GetInfrastructureConfiguration response object.
    """
    
    infrastructure_configuration: Optional[shared_infrastructureconfiguration.InfrastructureConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfiguration') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

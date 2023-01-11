import dataclasses
from typing import Optional
from ..shared import hsmconfiguration as shared_hsmconfiguration


@dataclasses.dataclass
class CreateHsmConfigurationResult:
    hsm_configuration: Optional[shared_hsmconfiguration.HsmConfiguration] = dataclasses.field(default=None)
    

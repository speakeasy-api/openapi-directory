import dataclasses
from typing import Optional
from ..shared import aquaconfiguration as shared_aquaconfiguration


@dataclasses.dataclass
class ModifyAquaOutputMessage:
    aqua_configuration: Optional[shared_aquaconfiguration.AquaConfiguration] = dataclasses.field(default=None)
    

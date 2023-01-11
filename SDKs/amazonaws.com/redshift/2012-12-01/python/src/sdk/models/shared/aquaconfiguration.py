import dataclasses
from typing import Optional
from enum import Enum
from ..shared import aquaconfigurationstatus_enum as shared_aquaconfigurationstatus_enum
from ..shared import aquastatus_enum as shared_aquastatus_enum


@dataclasses.dataclass
class AquaConfiguration:
    r"""AquaConfiguration
    The AQUA (Advanced Query Accelerator) configuration of the cluster.
    """
    
    aqua_configuration_status: Optional[shared_aquaconfigurationstatus_enum.AquaConfigurationStatusEnum] = dataclasses.field(default=None)
    aqua_status: Optional[shared_aquastatus_enum.AquaStatusEnum] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterParameterStatus:
    r"""ClusterParameterStatus
    Describes the status of a parameter group.
    """
    
    parameter_apply_error_description: Optional[str] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    parameter_name: Optional[str] = dataclasses.field(default=None)
    

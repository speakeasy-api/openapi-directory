import dataclasses
from typing import Optional
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class DefaultClusterParameters:
    r"""DefaultClusterParameters
    Describes the default cluster parameters for a parameter group family.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    parameter_group_family: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class EngineDefaults:
    r"""EngineDefaults
    Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. 
    """
    
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class DbClusterParameterGroupDetails:
    r"""DbClusterParameterGroupDetails
    Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    

import dataclasses
from ..shared import scalingparameters as shared_scalingparameters
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class ScalingParametersStatus:
    r"""ScalingParametersStatus
    The status and configuration of a search domain's scaling parameters. 
    """
    
    options: shared_scalingparameters.ScalingParameters = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    

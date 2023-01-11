import dataclasses
from ..shared import scalingparametersstatus as shared_scalingparametersstatus


@dataclasses.dataclass
class DescribeScalingParametersResponse:
    r"""DescribeScalingParametersResponse
    The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
    """
    
    scaling_parameters: shared_scalingparametersstatus.ScalingParametersStatus = dataclasses.field()
    

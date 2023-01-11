import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import scalingparametersstatus as shared_scalingparametersstatus


@dataclasses.dataclass
class UpdateScalingParametersResponse:
    r"""UpdateScalingParametersResponse
    The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
    """
    
    scaling_parameters: shared_scalingparametersstatus.ScalingParametersStatus = dataclasses.field()
    

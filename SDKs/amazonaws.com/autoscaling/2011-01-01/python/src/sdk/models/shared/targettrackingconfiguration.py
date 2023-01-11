import dataclasses
from typing import Optional
from ..shared import customizedmetricspecification as shared_customizedmetricspecification
from ..shared import predefinedmetricspecification as shared_predefinedmetricspecification


@dataclasses.dataclass
class TargetTrackingConfiguration:
    r"""TargetTrackingConfiguration
    Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
    """
    
    target_value: float = dataclasses.field()
    customized_metric_specification: Optional[shared_customizedmetricspecification.CustomizedMetricSpecification] = dataclasses.field(default=None)
    disable_scale_in: Optional[bool] = dataclasses.field(default=None)
    predefined_metric_specification: Optional[shared_predefinedmetricspecification.PredefinedMetricSpecification] = dataclasses.field(default=None)
    

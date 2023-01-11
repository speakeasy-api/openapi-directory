import dataclasses
from typing import Optional
from ..shared import launchtemplatespecification as shared_launchtemplatespecification


@dataclasses.dataclass
class AutoScalingInstanceDetails:
    r"""AutoScalingInstanceDetails
    Describes an EC2 instance associated with an Auto Scaling group.
    """
    
    auto_scaling_group_name: str = dataclasses.field()
    availability_zone: str = dataclasses.field()
    health_status: str = dataclasses.field()
    instance_id: str = dataclasses.field()
    lifecycle_state: str = dataclasses.field()
    protected_from_scale_in: bool = dataclasses.field()
    instance_type: Optional[str] = dataclasses.field(default=None)
    launch_configuration_name: Optional[str] = dataclasses.field(default=None)
    launch_template: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    weighted_capacity: Optional[str] = dataclasses.field(default=None)
    

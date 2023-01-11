import dataclasses
from typing import Optional
from ..shared import launchtemplatespecification as shared_launchtemplatespecification


@dataclasses.dataclass
class LaunchTemplateOverrides:
    r"""LaunchTemplateOverrides
    Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 40. The maximum number of distinct launch templates you can define for an Auto Scaling group is 20. For more information about configuring overrides, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html\">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. 
    """
    
    instance_type: Optional[str] = dataclasses.field(default=None)
    launch_template_specification: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    weighted_capacity: Optional[str] = dataclasses.field(default=None)
    

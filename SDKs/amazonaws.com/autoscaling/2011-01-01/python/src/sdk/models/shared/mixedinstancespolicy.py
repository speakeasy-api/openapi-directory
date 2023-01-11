import dataclasses
from typing import Optional
from ..shared import instancesdistribution as shared_instancesdistribution
from ..shared import launchtemplate as shared_launchtemplate


@dataclasses.dataclass
class MixedInstancesPolicy:
    r"""MixedInstancesPolicy
    Describes a mixed instances policy. A mixed instances policy contains the instance types Amazon EC2 Auto Scaling can launch, and other information Amazon EC2 Auto Scaling can use to launch instances to help you optimize your costs. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html\">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    """
    
    instances_distribution: Optional[shared_instancesdistribution.InstancesDistribution] = dataclasses.field(default=None)
    launch_template: Optional[shared_launchtemplate.LaunchTemplate] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class LaunchTemplateSpecification:
    r"""LaunchTemplateSpecification
    Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html\">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    """
    
    launch_template_id: Optional[str] = dataclasses.field(default=None)
    launch_template_name: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    

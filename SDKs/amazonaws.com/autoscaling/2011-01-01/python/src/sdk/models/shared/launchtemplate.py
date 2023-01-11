import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import launchtemplateoverrides as shared_launchtemplateoverrides


@dataclasses.dataclass
class LaunchTemplate:
    r"""LaunchTemplate
    <p>Describes a launch template and overrides. </p> <p>You specify these properties as part of a mixed instances policy. </p> <p>When you update the launch template or overrides in the <a>UpdateAutoScalingGroup</a> API call, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
    """
    
    launch_template_specification: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    overrides: Optional[list[shared_launchtemplateoverrides.LaunchTemplateOverrides]] = dataclasses.field(default=None)
    

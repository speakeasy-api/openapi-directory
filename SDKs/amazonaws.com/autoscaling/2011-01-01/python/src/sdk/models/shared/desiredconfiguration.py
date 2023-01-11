import dataclasses
from typing import Optional
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import mixedinstancespolicy as shared_mixedinstancespolicy


@dataclasses.dataclass
class DesiredConfiguration:
    r"""DesiredConfiguration
    <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
    """
    
    launch_template: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    mixed_instances_policy: Optional[shared_mixedinstancespolicy.MixedInstancesPolicy] = dataclasses.field(default=None)
    

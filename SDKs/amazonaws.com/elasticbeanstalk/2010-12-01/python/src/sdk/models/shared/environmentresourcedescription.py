import dataclasses
from typing import Optional
from ..shared import autoscalinggroup as shared_autoscalinggroup
from ..shared import instance as shared_instance
from ..shared import launchconfiguration as shared_launchconfiguration
from ..shared import launchtemplate as shared_launchtemplate
from ..shared import loadbalancer as shared_loadbalancer
from ..shared import queue as shared_queue
from ..shared import trigger as shared_trigger


@dataclasses.dataclass
class EnvironmentResourceDescription:
    r"""EnvironmentResourceDescription
    Describes the AWS resources in use by this environment. This data is live.
    """
    
    auto_scaling_groups: Optional[list[shared_autoscalinggroup.AutoScalingGroup]] = dataclasses.field(default=None)
    environment_name: Optional[str] = dataclasses.field(default=None)
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    launch_configurations: Optional[list[shared_launchconfiguration.LaunchConfiguration]] = dataclasses.field(default=None)
    launch_templates: Optional[list[shared_launchtemplate.LaunchTemplate]] = dataclasses.field(default=None)
    load_balancers: Optional[list[shared_loadbalancer.LoadBalancer]] = dataclasses.field(default=None)
    queues: Optional[list[shared_queue.Queue]] = dataclasses.field(default=None)
    triggers: Optional[list[shared_trigger.Trigger]] = dataclasses.field(default=None)
    

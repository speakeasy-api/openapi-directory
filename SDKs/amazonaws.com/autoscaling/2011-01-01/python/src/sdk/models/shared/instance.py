import dataclasses
from typing import Optional
from enum import Enum
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import lifecyclestate_enum as shared_lifecyclestate_enum


@dataclasses.dataclass
class Instance:
    r"""Instance
    Describes an EC2 instance.
    """
    
    availability_zone: str = dataclasses.field()
    health_status: str = dataclasses.field()
    instance_id: str = dataclasses.field()
    lifecycle_state: shared_lifecyclestate_enum.LifecycleStateEnum = dataclasses.field()
    protected_from_scale_in: bool = dataclasses.field()
    instance_type: Optional[str] = dataclasses.field(default=None)
    launch_configuration_name: Optional[str] = dataclasses.field(default=None)
    launch_template: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    weighted_capacity: Optional[str] = dataclasses.field(default=None)
    

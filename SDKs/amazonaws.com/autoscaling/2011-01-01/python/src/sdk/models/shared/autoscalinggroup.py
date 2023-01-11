import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import enabledmetric as shared_enabledmetric
from ..shared import instance as shared_instance
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import mixedinstancespolicy as shared_mixedinstancespolicy
from ..shared import suspendedprocess as shared_suspendedprocess
from ..shared import tagdescription as shared_tagdescription
from ..shared import warmpoolconfiguration as shared_warmpoolconfiguration


@dataclasses.dataclass
class AutoScalingGroup:
    r"""AutoScalingGroup
    Describes an Auto Scaling group.
    """
    
    auto_scaling_group_name: str = dataclasses.field()
    availability_zones: list[str] = dataclasses.field()
    created_time: datetime = dataclasses.field()
    default_cooldown: int = dataclasses.field()
    desired_capacity: int = dataclasses.field()
    health_check_type: str = dataclasses.field()
    max_size: int = dataclasses.field()
    min_size: int = dataclasses.field()
    auto_scaling_group_arn: Optional[str] = dataclasses.field(default=None)
    capacity_rebalance: Optional[bool] = dataclasses.field(default=None)
    context: Optional[str] = dataclasses.field(default=None)
    enabled_metrics: Optional[list[shared_enabledmetric.EnabledMetric]] = dataclasses.field(default=None)
    health_check_grace_period: Optional[int] = dataclasses.field(default=None)
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    launch_configuration_name: Optional[str] = dataclasses.field(default=None)
    launch_template: Optional[shared_launchtemplatespecification.LaunchTemplateSpecification] = dataclasses.field(default=None)
    load_balancer_names: Optional[list[str]] = dataclasses.field(default=None)
    max_instance_lifetime: Optional[int] = dataclasses.field(default=None)
    mixed_instances_policy: Optional[shared_mixedinstancespolicy.MixedInstancesPolicy] = dataclasses.field(default=None)
    new_instances_protected_from_scale_in: Optional[bool] = dataclasses.field(default=None)
    placement_group: Optional[str] = dataclasses.field(default=None)
    predicted_capacity: Optional[int] = dataclasses.field(default=None)
    service_linked_role_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    suspended_processes: Optional[list[shared_suspendedprocess.SuspendedProcess]] = dataclasses.field(default=None)
    tags: Optional[list[shared_tagdescription.TagDescription]] = dataclasses.field(default=None)
    target_group_ar_ns: Optional[list[str]] = dataclasses.field(default=None)
    termination_policies: Optional[list[str]] = dataclasses.field(default=None)
    vpc_zone_identifier: Optional[str] = dataclasses.field(default=None)
    warm_pool_configuration: Optional[shared_warmpoolconfiguration.WarmPoolConfiguration] = dataclasses.field(default=None)
    warm_pool_size: Optional[int] = dataclasses.field(default=None)
    

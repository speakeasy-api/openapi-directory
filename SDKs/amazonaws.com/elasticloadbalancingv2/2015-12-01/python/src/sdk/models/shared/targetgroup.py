import dataclasses
from typing import Optional
from enum import Enum
from ..shared import protocolenum_enum as shared_protocolenum_enum
from ..shared import matcher as shared_matcher
from ..shared import targettypeenum_enum as shared_targettypeenum_enum


@dataclasses.dataclass
class TargetGroup:
    r"""TargetGroup
    Information about a target group.
    """
    
    health_check_enabled: Optional[bool] = dataclasses.field(default=None)
    health_check_interval_seconds: Optional[int] = dataclasses.field(default=None)
    health_check_path: Optional[str] = dataclasses.field(default=None)
    health_check_port: Optional[str] = dataclasses.field(default=None)
    health_check_protocol: Optional[shared_protocolenum_enum.ProtocolEnumEnum] = dataclasses.field(default=None)
    health_check_timeout_seconds: Optional[int] = dataclasses.field(default=None)
    healthy_threshold_count: Optional[int] = dataclasses.field(default=None)
    load_balancer_arns: Optional[list[str]] = dataclasses.field(default=None)
    matcher: Optional[shared_matcher.Matcher] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    protocol: Optional[shared_protocolenum_enum.ProtocolEnumEnum] = dataclasses.field(default=None)
    protocol_version: Optional[str] = dataclasses.field(default=None)
    target_group_arn: Optional[str] = dataclasses.field(default=None)
    target_group_name: Optional[str] = dataclasses.field(default=None)
    target_type: Optional[shared_targettypeenum_enum.TargetTypeEnumEnum] = dataclasses.field(default=None)
    unhealthy_threshold_count: Optional[int] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    

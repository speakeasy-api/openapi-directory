import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange:
    r"""ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
    The destination port range assigned to the Traffic Mirror rule.
    """
    
    from_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    to_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange:
    r"""ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
    The source port range assigned to the Traffic Mirror rule.
    """
    
    from_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    to_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule:
    r"""ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
    Modifies a Traffic Mirror rule.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_port_range: Optional[ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange] = dataclasses.field(default=None)
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    rule_action: Optional[dict[str, Any]] = dataclasses.field(default=None)
    rule_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_port_range: Optional[ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange] = dataclasses.field(default=None)
    traffic_direction: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_rule_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTrafficMirrorFilterRuleResult:
    traffic_mirror_filter_rule: Optional[ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange:
    r"""CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
    The destination port range assigned to the Traffic Mirror rule.
    """
    
    from_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    to_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange:
    r"""CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
    The source port range assigned to the Traffic Mirror rule.
    """
    
    from_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    to_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule:
    r"""CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
    The Traffic Mirror rule.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_port_range: Optional[CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange] = dataclasses.field(default=None)
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    rule_action: Optional[dict[str, Any]] = dataclasses.field(default=None)
    rule_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_port_range: Optional[CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange] = dataclasses.field(default=None)
    traffic_direction: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_rule_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrafficMirrorFilterRuleResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filter_rule: Optional[CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule] = dataclasses.field(default=None)
    

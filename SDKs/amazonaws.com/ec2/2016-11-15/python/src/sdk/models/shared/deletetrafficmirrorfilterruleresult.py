import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTrafficMirrorFilterRuleResult:
    traffic_mirror_filter_rule_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

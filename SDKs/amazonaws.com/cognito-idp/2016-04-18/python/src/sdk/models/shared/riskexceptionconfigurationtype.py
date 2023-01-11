import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RiskExceptionConfigurationType:
    r"""RiskExceptionConfigurationType
    The type of the configuration to override the risk decision.
    """
    
    blocked_ip_range_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockedIPRangeList') }})
    skipped_ip_range_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkippedIPRangeList') }})
    

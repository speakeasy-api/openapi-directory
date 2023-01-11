import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expectedroute as shared_expectedroute


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallMissingExpectedRoutesViolation:
    r"""NetworkFirewallMissingExpectedRoutesViolation
    Violation detail for an expected route missing in Network Firewall.
    """
    
    expected_routes: Optional[list[shared_expectedroute.ExpectedRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedRoutes') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    

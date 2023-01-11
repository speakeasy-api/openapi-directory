import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorCheckRefreshStatus:
    r"""TrustedAdvisorCheckRefreshStatus
    The refresh status of a Trusted Advisor check.
    """
    
    check_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    millis_until_next_refreshable: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('millisUntilNextRefreshable') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

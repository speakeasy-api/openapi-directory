import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RenewDomainRequest:
    r"""RenewDomainRequest
    A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
    """
    
    current_expiry_year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentExpiryYear') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    duration_in_years: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInYears') }})
    

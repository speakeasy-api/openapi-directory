import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaindetails as shared_domaindetails
from ..shared import ipaddressdetails as shared_ipaddressdetails
from ..shared import useridentity as shared_useridentity


@dataclass_json
@dataclasses.dataclass
class FindingActor:
    r"""FindingActor
    Provides information about an entity that performed an action that produced a policy finding for a resource.
    """
    
    domain_details: Optional[shared_domaindetails.DomainDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainDetails') }})
    ip_address_details: Optional[shared_ipaddressdetails.IPAddressDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressDetails') }})
    user_identity: Optional[shared_useridentity.UserIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIdentity') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnableDomainTransferLockRequest:
    r"""EnableDomainTransferLockRequest
    A request to set the transfer lock for the specified domain.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    

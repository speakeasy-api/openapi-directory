import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaintransferability as shared_domaintransferability


@dataclass_json
@dataclasses.dataclass
class CheckDomainTransferabilityResponse:
    r"""CheckDomainTransferabilityResponse
    The CheckDomainTransferability response includes the following elements.
    """
    
    transferability: shared_domaintransferability.DomainTransferability = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transferability') }})
    

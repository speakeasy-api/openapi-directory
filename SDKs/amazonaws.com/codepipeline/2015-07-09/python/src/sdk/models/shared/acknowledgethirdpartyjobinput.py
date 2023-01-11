import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AcknowledgeThirdPartyJobInput:
    r"""AcknowledgeThirdPartyJobInput
    Represents the input of an AcknowledgeThirdPartyJob action.
    """
    
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    nonce: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    

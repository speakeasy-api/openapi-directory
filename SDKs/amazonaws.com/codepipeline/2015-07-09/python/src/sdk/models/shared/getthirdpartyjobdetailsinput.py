import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetThirdPartyJobDetailsInput:
    r"""GetThirdPartyJobDetailsInput
    Represents the input of a <code>GetThirdPartyJobDetails</code> action.
    """
    
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    

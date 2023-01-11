import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StopLoggingRequest:
    r"""StopLoggingRequest
    Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

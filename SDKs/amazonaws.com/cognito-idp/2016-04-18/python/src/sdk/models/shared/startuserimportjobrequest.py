import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartUserImportJobRequest:
    r"""StartUserImportJobRequest
    Represents the request to start the user import job.
    """
    
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    

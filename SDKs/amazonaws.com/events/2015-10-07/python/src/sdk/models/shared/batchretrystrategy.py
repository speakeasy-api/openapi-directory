import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchRetryStrategy:
    r"""BatchRetryStrategy
    The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
    """
    
    attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attempts') }})
    

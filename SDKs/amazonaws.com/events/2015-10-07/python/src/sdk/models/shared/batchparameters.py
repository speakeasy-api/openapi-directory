import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batcharrayproperties as shared_batcharrayproperties
from ..shared import batchretrystrategy as shared_batchretrystrategy


@dataclass_json
@dataclasses.dataclass
class BatchParameters:
    r"""BatchParameters
    The custom parameters to be used when the target is an Batch job.
    """
    
    job_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinition') }})
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    array_properties: Optional[shared_batcharrayproperties.BatchArrayProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrayProperties') }})
    retry_strategy: Optional[shared_batchretrystrategy.BatchRetryStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    

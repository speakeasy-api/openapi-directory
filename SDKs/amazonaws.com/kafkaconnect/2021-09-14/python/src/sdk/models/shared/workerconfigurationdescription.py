import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkerConfigurationDescription:
    r"""WorkerConfigurationDescription
    The description of the worker configuration.
    """
    
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    worker_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfigurationArn') }})
    

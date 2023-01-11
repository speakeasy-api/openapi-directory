import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
    The container health check command and associated configuration parameters for the container.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retries') }})
    start_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPeriod') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    

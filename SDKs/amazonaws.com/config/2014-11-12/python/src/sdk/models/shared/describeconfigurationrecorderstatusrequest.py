import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationRecorderStatusRequest:
    r"""DescribeConfigurationRecorderStatusRequest
    The input for the <a>DescribeConfigurationRecorderStatus</a> action.
    """
    
    configuration_recorder_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderNames') }})
    

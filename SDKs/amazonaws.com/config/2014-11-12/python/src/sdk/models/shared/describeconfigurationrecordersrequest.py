import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationRecordersRequest:
    r"""DescribeConfigurationRecordersRequest
    The input for the <a>DescribeConfigurationRecorders</a> action.
    """
    
    configuration_recorder_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderNames') }})
    

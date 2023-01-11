import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationrecorder as shared_configurationrecorder


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationRecordersResponse:
    r"""DescribeConfigurationRecordersResponse
    The output for the <a>DescribeConfigurationRecorders</a> action.
    """
    
    configuration_recorders: Optional[list[shared_configurationrecorder.ConfigurationRecorder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorders') }})
    

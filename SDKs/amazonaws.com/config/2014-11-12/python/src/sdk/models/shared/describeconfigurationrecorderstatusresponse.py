import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationrecorderstatus as shared_configurationrecorderstatus


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationRecorderStatusResponse:
    r"""DescribeConfigurationRecorderStatusResponse
    The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
    """
    
    configuration_recorders_status: Optional[list[shared_configurationrecorderstatus.ConfigurationRecorderStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecordersStatus') }})
    

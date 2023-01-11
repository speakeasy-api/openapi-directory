import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CloudwatchLogsAction:
    r"""CloudwatchLogsAction
    Describes an action that sends data to CloudWatch Logs.
    """
    
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    

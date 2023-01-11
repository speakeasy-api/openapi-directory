import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggrouplogdestination as shared_cloudwatchloggrouplogdestination


@dataclass_json
@dataclasses.dataclass
class TextLogDestination:
    r"""TextLogDestination
    Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
    """
    
    cloud_watch: shared_cloudwatchloggrouplogdestination.CloudWatchLogGroupLogDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatch') }})
    

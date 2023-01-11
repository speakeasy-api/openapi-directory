import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggingoptions as shared_loggingoptions


@dataclass_json
@dataclasses.dataclass
class DescribeLoggingOptionsResponse:
    logging_options: shared_loggingoptions.LoggingOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingOptions') }})
    

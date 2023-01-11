import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import options as shared_options


@dataclass_json
@dataclasses.dataclass
class UpdateTaskExecutionRequest:
    options: shared_options.Options = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    task_execution_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutionArn') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateApplicationResponse:
    application_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationArn') }})
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    

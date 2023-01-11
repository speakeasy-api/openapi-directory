import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment


@dataclass_json
@dataclasses.dataclass
class UpdateEnvironmentOutput:
    environment: shared_environment.Environment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

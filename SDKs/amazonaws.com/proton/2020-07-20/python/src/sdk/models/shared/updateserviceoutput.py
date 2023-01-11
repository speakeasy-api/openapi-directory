import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import service as shared_service


@dataclass_json
@dataclasses.dataclass
class UpdateServiceOutput:
    service: shared_service.Service = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    

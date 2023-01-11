import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicechange as shared_servicechange


@dataclass_json
@dataclasses.dataclass
class UpdateServiceRequest:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    service: shared_servicechange.ServiceChange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    

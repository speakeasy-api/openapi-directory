import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceinstance as shared_serviceinstance


@dataclass_json
@dataclasses.dataclass
class UpdateServiceInstanceOutput:
    service_instance: shared_serviceinstance.ServiceInstance = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceInstance') }})
    

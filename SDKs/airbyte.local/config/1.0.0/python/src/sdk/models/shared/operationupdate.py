import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatorconfiguration as shared_operatorconfiguration


@dataclass_json
@dataclasses.dataclass
class OperationUpdate:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    operator_configuration: shared_operatorconfiguration.OperatorConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorConfiguration') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statemachinetype_enum as shared_statemachinetype_enum


@dataclass_json
@dataclasses.dataclass
class StateMachineListItem:
    r"""StateMachineListItem
    Contains details about the state machine.
    """
    
    creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    type: shared_statemachinetype_enum.StateMachineTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

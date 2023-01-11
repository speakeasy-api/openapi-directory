import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionhistorydetails as shared_actionhistorydetails
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import actionstatus_enum as shared_actionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ActionHistory:
    r"""ActionHistory
     The historical records for a budget action. 
    """
    
    action_history_details: shared_actionhistorydetails.ActionHistoryDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionHistoryDetails') }})
    event_type: shared_eventtype_enum.EventTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    status: shared_actionstatus_enum.ActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import challengeresponsetype as shared_challengeresponsetype
from ..shared import eventcontextdatatype as shared_eventcontextdatatype
from ..shared import eventfeedbacktype as shared_eventfeedbacktype
from ..shared import eventresponsetype_enum as shared_eventresponsetype_enum
from ..shared import eventrisktype as shared_eventrisktype
from ..shared import eventtype_enum as shared_eventtype_enum


@dataclass_json
@dataclasses.dataclass
class AuthEventType:
    r"""AuthEventType
    The authentication event type.
    """
    
    challenge_responses: Optional[list[shared_challengeresponsetype.ChallengeResponseType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponses') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_context_data: Optional[shared_eventcontextdatatype.EventContextDataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventContextData') }})
    event_feedback: Optional[shared_eventfeedbacktype.EventFeedbackType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFeedback') }})
    event_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventId') }})
    event_response: Optional[shared_eventresponsetype_enum.EventResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventResponse') }})
    event_risk: Optional[shared_eventrisktype.EventRiskType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventRisk') }})
    event_type: Optional[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    

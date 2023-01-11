import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inspectorevent_enum as shared_inspectorevent_enum


@dataclass_json
@dataclasses.dataclass
class EventSubscription:
    r"""EventSubscription
    This data type is used in the <a>Subscription</a> data type.
    """
    
    event: shared_inspectorevent_enum.InspectorEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    subscribed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feedbackvaluetype_enum as shared_feedbackvaluetype_enum


@dataclass_json
@dataclasses.dataclass
class EventFeedbackType:
    r"""EventFeedbackType
    Specifies the event feedback type.
    """
    
    feedback_value: shared_feedbackvaluetype_enum.FeedbackValueTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackValue') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Provider') }})
    feedback_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

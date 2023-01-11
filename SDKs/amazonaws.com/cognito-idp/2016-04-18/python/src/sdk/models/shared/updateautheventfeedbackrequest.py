import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feedbackvaluetype_enum as shared_feedbackvaluetype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateAuthEventFeedbackRequest:
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventId') }})
    feedback_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackToken') }})
    feedback_value: shared_feedbackvaluetype_enum.FeedbackValueTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackValue') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    

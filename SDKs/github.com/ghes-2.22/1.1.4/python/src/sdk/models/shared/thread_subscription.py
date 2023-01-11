import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ThreadSubscription:
    r"""ThreadSubscription
    Thread Subscription
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ignored: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    subscribed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribed') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    repository_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    thread_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thread_url') }})
    

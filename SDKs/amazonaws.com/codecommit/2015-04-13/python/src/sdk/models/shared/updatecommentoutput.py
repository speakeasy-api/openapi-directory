import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment as shared_comment


@dataclass_json
@dataclasses.dataclass
class UpdateCommentOutput:
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

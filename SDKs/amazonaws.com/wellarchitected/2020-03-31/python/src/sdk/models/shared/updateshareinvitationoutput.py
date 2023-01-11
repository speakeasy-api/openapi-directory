import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shareinvitation as shared_shareinvitation


@dataclass_json
@dataclasses.dataclass
class UpdateShareInvitationOutput:
    share_invitation: Optional[shared_shareinvitation.ShareInvitation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitation') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selectiveauth_enum as shared_selectiveauth_enum


@dataclass_json
@dataclasses.dataclass
class UpdateTrustRequest:
    trust_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    selective_auth: Optional[shared_selectiveauth_enum.SelectiveAuthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectiveAuth') }})
    

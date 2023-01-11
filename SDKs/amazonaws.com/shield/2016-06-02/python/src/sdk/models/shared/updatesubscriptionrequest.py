import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorenew_enum as shared_autorenew_enum


@dataclass_json
@dataclasses.dataclass
class UpdateSubscriptionRequest:
    auto_renew: Optional[shared_autorenew_enum.AutoRenewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    

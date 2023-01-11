import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharestatus_enum as shared_sharestatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdatePortfolioShareOutput:
    portfolio_share_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareToken') }})
    status: Optional[shared_sharestatus_enum.ShareStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

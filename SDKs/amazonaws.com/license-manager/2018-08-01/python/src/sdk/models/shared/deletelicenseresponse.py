import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensedeletionstatus_enum as shared_licensedeletionstatus_enum


@dataclass_json
@dataclasses.dataclass
class DeleteLicenseResponse:
    deletion_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionDate') }})
    status: Optional[shared_licensedeletionstatus_enum.LicenseDeletionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

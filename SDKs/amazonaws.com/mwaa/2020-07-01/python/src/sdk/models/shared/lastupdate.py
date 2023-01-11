import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateerror as shared_updateerror
from ..shared import updatestatus_enum as shared_updatestatus_enum


@dataclass_json
@dataclasses.dataclass
class LastUpdate:
    r"""LastUpdate
    The status of the last update on the environment, and any errors that were encountered.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[shared_updateerror.UpdateError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    status: Optional[shared_updatestatus_enum.UpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

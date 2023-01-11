import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceupdatestatus_enum as shared_serviceupdatestatus_enum


@dataclass_json
@dataclasses.dataclass
class PendingModifiedServiceUpdate:
    r"""PendingModifiedServiceUpdate
    Update action that has yet to be processed for the corresponding apply/stop request
    """
    
    service_update_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdateName') }})
    status: Optional[shared_serviceupdatestatus_enum.ServiceUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

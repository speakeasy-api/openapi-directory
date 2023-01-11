import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitorerrorcode_enum as shared_monitorerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class MonitorErrorDetails:
    r"""MonitorErrorDetails
    Contains IoT SiteWise Monitor error details.
    """
    
    code: Optional[shared_monitorerrorcode_enum.MonitorErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

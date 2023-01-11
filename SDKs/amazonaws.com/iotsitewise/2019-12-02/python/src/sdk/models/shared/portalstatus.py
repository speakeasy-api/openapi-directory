import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitorerrordetails as shared_monitorerrordetails
from ..shared import portalstate_enum as shared_portalstate_enum


@dataclass_json
@dataclasses.dataclass
class PortalStatus:
    r"""PortalStatus
    Contains information about the current status of a portal.
    """
    
    state: shared_portalstate_enum.PortalStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    error: Optional[shared_monitorerrordetails.MonitorErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualservicestatuscode_enum as shared_virtualservicestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class VirtualServiceStatus:
    r"""VirtualServiceStatus
    An object that represents the status of a virtual service.
    """
    
    status: shared_virtualservicestatuscode_enum.VirtualServiceStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

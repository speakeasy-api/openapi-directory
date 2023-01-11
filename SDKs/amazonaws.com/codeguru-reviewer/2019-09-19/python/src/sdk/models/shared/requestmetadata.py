import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventinfo as shared_eventinfo
from ..shared import vendorname_enum as shared_vendorname_enum


@dataclass_json
@dataclasses.dataclass
class RequestMetadata:
    r"""RequestMetadata
    Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
    """
    
    event_info: Optional[shared_eventinfo.EventInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventInfo') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    requester: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requester') }})
    vendor_name: Optional[shared_vendorname_enum.VendorNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VendorName') }})
    

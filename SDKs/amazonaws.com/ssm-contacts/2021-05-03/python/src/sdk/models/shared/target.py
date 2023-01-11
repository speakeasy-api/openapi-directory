import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channeltargetinfo as shared_channeltargetinfo
from ..shared import contacttargetinfo as shared_contacttargetinfo


@dataclass_json
@dataclasses.dataclass
class Target:
    r"""Target
    The contact or contact channel that's being engaged.
    """
    
    channel_target_info: Optional[shared_channeltargetinfo.ChannelTargetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelTargetInfo') }})
    contact_target_info: Optional[shared_contacttargetinfo.ContactTargetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactTargetInfo') }})
    

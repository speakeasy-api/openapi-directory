import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onfailure as shared_onfailure
from ..shared import onsuccess as shared_onsuccess


@dataclass_json
@dataclasses.dataclass
class DestinationConfig:
    r"""DestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[shared_onfailure.OnFailure] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[shared_onsuccess.OnSuccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    

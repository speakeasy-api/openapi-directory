import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendingOptions:
    r"""SendingOptions
    Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
    """
    
    sending_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    

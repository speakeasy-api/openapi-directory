import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesslog as shared_accesslog


@dataclass_json
@dataclasses.dataclass
class Logging:
    r"""Logging
    An object that represents the logging information for a virtual node.
    """
    
    access_log: Optional[shared_accesslog.AccessLog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLog') }})
    

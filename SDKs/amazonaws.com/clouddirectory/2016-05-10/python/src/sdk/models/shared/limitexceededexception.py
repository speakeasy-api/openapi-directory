import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LimitExceededException:
    r"""LimitExceededException
    Indicates that limits are exceeded. See <a href=\"http://docs.aws.amazon.com/directoryservice/latest/admin-guide/limits.html\">Limits</a> for more information.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

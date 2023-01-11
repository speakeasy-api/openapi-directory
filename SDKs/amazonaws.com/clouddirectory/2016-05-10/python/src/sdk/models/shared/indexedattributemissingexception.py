import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IndexedAttributeMissingException:
    r"""IndexedAttributeMissingException
    An object has been attempted to be attached to an object that does not have the appropriate attribute value.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SchemaAlreadyPublishedException:
    r"""SchemaAlreadyPublishedException
    Indicates that a schema is already published.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

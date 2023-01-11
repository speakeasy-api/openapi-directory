import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IncompatibleSchemaException:
    r"""IncompatibleSchemaException
    Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

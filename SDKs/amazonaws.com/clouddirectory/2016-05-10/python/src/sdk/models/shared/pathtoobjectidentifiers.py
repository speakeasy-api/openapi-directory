import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PathToObjectIdentifiers:
    r"""PathToObjectIdentifiers
    Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
    """
    
    object_identifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifiers') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    

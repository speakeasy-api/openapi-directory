import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PorterLargeFile:
    r"""PorterLargeFile
    Porter Large File
    """
    
    oid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oid') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    ref_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_name') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

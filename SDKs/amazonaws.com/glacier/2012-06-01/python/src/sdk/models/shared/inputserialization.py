import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvinput as shared_csvinput


@dataclass_json
@dataclasses.dataclass
class InputSerialization:
    r"""InputSerialization
    Describes how the archive is serialized.
    """
    
    csv: Optional[shared_csvinput.CsvInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    

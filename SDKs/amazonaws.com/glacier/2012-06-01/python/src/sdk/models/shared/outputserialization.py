import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvoutput as shared_csvoutput


@dataclass_json
@dataclasses.dataclass
class OutputSerialization:
    r"""OutputSerialization
    Describes how the select output is serialized.
    """
    
    csv: Optional[shared_csvoutput.CsvOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    

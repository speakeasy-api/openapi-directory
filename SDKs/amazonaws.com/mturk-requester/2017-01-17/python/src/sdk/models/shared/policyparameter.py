import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parametermapentry as shared_parametermapentry


@dataclass_json
@dataclasses.dataclass
class PolicyParameter:
    r"""PolicyParameter
     Name of the parameter from the Review policy. 
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    map_entries: Optional[list[shared_parametermapentry.ParameterMapEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MapEntries') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. 
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    

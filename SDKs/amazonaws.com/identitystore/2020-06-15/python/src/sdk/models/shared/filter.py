import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
    """
    
    attribute_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributePath') }})
    attribute_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValue') }})
    

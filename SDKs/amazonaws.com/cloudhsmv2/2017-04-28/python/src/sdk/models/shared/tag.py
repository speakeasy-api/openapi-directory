import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Tag:
    r"""Tag
    Contains a tag. A tag is a key-value pair.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

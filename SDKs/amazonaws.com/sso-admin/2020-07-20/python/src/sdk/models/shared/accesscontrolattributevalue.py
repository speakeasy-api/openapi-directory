import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AccessControlAttributeValue:
    r"""AccessControlAttributeValue
    The value used for mapping a specified attribute to an identity source.
    """
    
    source: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    

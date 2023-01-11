import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ParameterAttribute:
    r"""ParameterAttribute
    The attributes allowed or specified with a parameter object.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    string_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    

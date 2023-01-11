import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deserializer as shared_deserializer


@dataclass_json
@dataclasses.dataclass
class InputFormatConfiguration:
    r"""InputFormatConfiguration
    Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
    """
    
    deserializer: Optional[shared_deserializer.Deserializer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deserializer') }})
    

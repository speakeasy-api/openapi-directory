import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extraparamname_enum as shared_extraparamname_enum


@dataclass_json
@dataclasses.dataclass
class ExtraParam:
    r"""ExtraParam
    ExtraParam includes the following elements.
    """
    
    name: shared_extraparamname_enum.ExtraParamNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

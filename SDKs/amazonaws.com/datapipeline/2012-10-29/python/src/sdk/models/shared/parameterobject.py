import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameterattribute as shared_parameterattribute


@dataclass_json
@dataclasses.dataclass
class ParameterObject:
    r"""ParameterObject
    Contains information about a parameter object.
    """
    
    attributes: list[shared_parameterattribute.ParameterAttribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

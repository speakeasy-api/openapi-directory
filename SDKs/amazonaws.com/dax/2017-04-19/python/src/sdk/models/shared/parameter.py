import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changetype_enum as shared_changetype_enum
from ..shared import ismodifiable_enum as shared_ismodifiable_enum
from ..shared import nodetypespecificvalue as shared_nodetypespecificvalue
from ..shared import parametertype_enum as shared_parametertype_enum


@dataclass_json
@dataclasses.dataclass
class Parameter:
    r"""Parameter
    Describes an individual setting that controls some aspect of DAX behavior.
    """
    
    allowed_values: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedValues') }})
    change_type: Optional[shared_changetype_enum.ChangeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    data_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_modifiable: Optional[shared_ismodifiable_enum.IsModifiableEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsModifiable') }})
    node_type_specific_values: Optional[list[shared_nodetypespecificvalue.NodeTypeSpecificValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeTypeSpecificValues') }})
    parameter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    parameter_type: Optional[shared_parametertype_enum.ParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterType') }})
    parameter_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValue') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    

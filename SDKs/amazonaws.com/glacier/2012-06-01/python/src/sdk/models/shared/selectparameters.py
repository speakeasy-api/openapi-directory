import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expressiontype_enum as shared_expressiontype_enum
from ..shared import inputserialization as shared_inputserialization
from ..shared import outputserialization as shared_outputserialization


@dataclass_json
@dataclasses.dataclass
class SelectParameters:
    r"""SelectParameters
    Contains information about the parameters used for a select.
    """
    
    expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    expression_type: Optional[shared_expressiontype_enum.ExpressionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionType') }})
    input_serialization: Optional[shared_inputserialization.InputSerialization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSerialization') }})
    output_serialization: Optional[shared_outputserialization.OutputSerialization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputSerialization') }})
    

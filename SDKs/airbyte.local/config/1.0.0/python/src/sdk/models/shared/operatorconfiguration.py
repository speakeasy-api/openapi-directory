import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatordbt as shared_operatordbt
from ..shared import operatornormalization as shared_operatornormalization
from ..shared import operatortype_enum as shared_operatortype_enum


@dataclass_json
@dataclasses.dataclass
class OperatorConfiguration:
    operator_type: shared_operatortype_enum.OperatorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorType') }})
    dbt: Optional[shared_operatordbt.OperatorDbt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbt') }})
    normalization: Optional[shared_operatornormalization.OperatorNormalization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalization') }})
    

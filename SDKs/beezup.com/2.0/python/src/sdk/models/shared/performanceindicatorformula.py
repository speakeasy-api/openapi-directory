import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import performanceindicatorformulaparametertype_enum as shared_performanceindicatorformulaparametertype_enum
from ..shared import performanceindicatorformulaoperatorname_enum as shared_performanceindicatorformulaoperatorname_enum


@dataclass_json
@dataclasses.dataclass
class PerformanceIndicatorFormula:
    r"""PerformanceIndicatorFormula
    The KPI formula
    """
    
    first_parameter: Optional[shared_performanceindicatorformulaparametertype_enum.PerformanceIndicatorFormulaParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstParameter') }})
    operator_name: Optional[shared_performanceindicatorformulaoperatorname_enum.PerformanceIndicatorFormulaOperatorNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    second_parameter: Optional[shared_performanceindicatorformulaparametertype_enum.PerformanceIndicatorFormulaParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondParameter') }})
    third_parameter: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdParameter') }})
    

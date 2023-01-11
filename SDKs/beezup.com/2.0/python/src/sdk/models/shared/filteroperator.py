import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filteroperatordatatype_enum as shared_filteroperatordatatype_enum


@dataclass_json
@dataclasses.dataclass
class FilterOperator:
    r"""FilterOperator
    The filter operator
    """
    
    expected_channel_column_data_type: Optional[shared_filteroperatordatatype_enum.FilterOperatorDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedChannelColumnDataType') }})
    expected_value_data_type: Optional[shared_filteroperatordatatype_enum.FilterOperatorDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedValueDataType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRequired') }})
    

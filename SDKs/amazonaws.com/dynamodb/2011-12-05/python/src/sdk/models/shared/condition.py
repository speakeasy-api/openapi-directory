import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalue as shared_attributevalue
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum


@dataclass_json
@dataclasses.dataclass
class Condition:
    comparison_operator: shared_comparisonoperator_enum.ComparisonOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    attribute_value_list: Optional[list[shared_attributevalue.AttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValueList') }})
    

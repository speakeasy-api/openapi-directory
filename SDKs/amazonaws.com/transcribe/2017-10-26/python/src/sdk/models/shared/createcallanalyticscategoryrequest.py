import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule


@dataclass_json
@dataclasses.dataclass
class CreateCallAnalyticsCategoryRequest:
    category_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoryName') }})
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    

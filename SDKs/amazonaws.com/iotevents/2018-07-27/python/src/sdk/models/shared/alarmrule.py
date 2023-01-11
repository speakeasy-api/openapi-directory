import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplerule as shared_simplerule


@dataclass_json
@dataclasses.dataclass
class AlarmRule:
    r"""AlarmRule
    Defines when your alarm is invoked.
    """
    
    simple_rule: Optional[shared_simplerule.SimpleRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRule') }})
    

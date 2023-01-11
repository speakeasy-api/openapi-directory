import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statefulaction_enum as shared_statefulaction_enum
from ..shared import header as shared_header
from ..shared import ruleoption as shared_ruleoption


@dataclass_json
@dataclasses.dataclass
class StatefulRule:
    r"""StatefulRule
    A single 5-tuple stateful rule, for use in a stateful rule group.
    """
    
    action: shared_statefulaction_enum.StatefulActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    header: shared_header.Header = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    rule_options: list[shared_ruleoption.RuleOption] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleOptions') }})
    

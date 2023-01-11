import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mappingrule as shared_mappingrule


@dataclass_json
@dataclasses.dataclass
class RulesConfigurationType:
    r"""RulesConfigurationType
    A container for rules.
    """
    
    rules: list[shared_mappingrule.MappingRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    

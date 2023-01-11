import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criterion as shared_criterion


@dataclass_json
@dataclasses.dataclass
class InlineArchiveRule:
    r"""InlineArchiveRule
    An criterion statement in an archive rule. Each archive rule may have multiple criteria.
    """
    
    filter: dict[str, shared_criterion.Criterion] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    

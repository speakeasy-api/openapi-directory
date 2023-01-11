import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abortcriteria as shared_abortcriteria


@dataclass_json
@dataclasses.dataclass
class AbortConfig:
    r"""AbortConfig
    The criteria that determine when and how a job abort takes place.
    """
    
    criteria_list: list[shared_abortcriteria.AbortCriteria] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteriaList') }})
    

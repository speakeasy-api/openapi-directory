import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StatusCheckPolicy:
    r"""StatusCheckPolicy
    Status Check Policy
    """
    
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    contexts_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

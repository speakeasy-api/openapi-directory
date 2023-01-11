import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GeneratedPolicy:
    r"""GeneratedPolicy
    Contains the text for the generated policy.
    """
    
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    

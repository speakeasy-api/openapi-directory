import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorCheckDescription:
    r"""TrustedAdvisorCheckDescription
    The description and metadata for a Trusted Advisor check.
    """
    
    category: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

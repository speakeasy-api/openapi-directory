import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeployKey:
    r"""DeployKey
    An SSH key granting access to a single repository.
    """
    
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    read_only: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

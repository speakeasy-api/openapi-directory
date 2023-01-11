import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PorterAuthor:
    r"""PorterAuthor
    Porter Author
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    import_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_id') }})
    remote_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

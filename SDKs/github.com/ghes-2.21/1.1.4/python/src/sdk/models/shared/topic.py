import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Topic:
    r"""Topic
    A topic aggregates entities that are related to a subject.
    """
    
    names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    

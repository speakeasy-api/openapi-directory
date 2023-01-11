import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagFilter:
    r"""TagFilter
    Used to filter the workflow executions in visibility APIs based on a tag.
    """
    
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

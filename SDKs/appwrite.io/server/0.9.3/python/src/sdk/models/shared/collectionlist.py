import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collection as shared_collection


@dataclass_json
@dataclasses.dataclass
class CollectionList:
    r"""CollectionList
    Collections List
    """
    
    collections: list[shared_collection.Collection] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collection as shared_collection


@dataclass_json
@dataclasses.dataclass
class CollectionsList:
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    

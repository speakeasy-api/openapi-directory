import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relateditem as shared_relateditem


@dataclass_json
@dataclasses.dataclass
class ListRelatedItemsOutput:
    related_items: list[shared_relateditem.RelatedItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedItems') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

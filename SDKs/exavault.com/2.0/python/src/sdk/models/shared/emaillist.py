import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emaillistattributes as shared_emaillistattributes
from ..shared import emaillistrelationships as shared_emaillistrelationships


@dataclass_json
@dataclasses.dataclass
class EmailList:
    r"""EmailList
    A single email group list
    """
    
    attributes: Optional[shared_emaillistattributes.EmailListAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[shared_emaillistrelationships.EmailListRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

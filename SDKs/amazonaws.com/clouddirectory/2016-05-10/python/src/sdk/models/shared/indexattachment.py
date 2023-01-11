import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekeyandvalue as shared_attributekeyandvalue


@dataclass_json
@dataclasses.dataclass
class IndexAttachment:
    r"""IndexAttachment
    Represents an index and an attached object.
    """
    
    indexed_attributes: Optional[list[shared_attributekeyandvalue.AttributeKeyAndValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexedAttributes') }})
    object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    

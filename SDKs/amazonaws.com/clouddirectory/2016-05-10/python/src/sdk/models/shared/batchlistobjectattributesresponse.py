import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekeyandvalue as shared_attributekeyandvalue


@dataclass_json
@dataclasses.dataclass
class BatchListObjectAttributesResponse:
    r"""BatchListObjectAttributesResponse
    Represents the output of a <a>ListObjectAttributes</a> response operation.
    """
    
    attributes: Optional[list[shared_attributekeyandvalue.AttributeKeyAndValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

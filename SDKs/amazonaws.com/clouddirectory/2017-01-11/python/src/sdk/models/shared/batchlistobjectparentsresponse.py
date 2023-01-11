import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectidentifierandlinknametuple as shared_objectidentifierandlinknametuple


@dataclass_json
@dataclasses.dataclass
class BatchListObjectParentsResponse:
    r"""BatchListObjectParentsResponse
    Represents the output of a <a>ListObjectParents</a> response operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parent_links: Optional[list[shared_objectidentifierandlinknametuple.ObjectIdentifierAndLinkNameTuple]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentLinks') }})
    

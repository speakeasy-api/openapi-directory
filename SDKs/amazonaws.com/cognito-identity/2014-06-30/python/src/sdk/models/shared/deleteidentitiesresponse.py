import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unprocessedidentityid as shared_unprocessedidentityid


@dataclass_json
@dataclasses.dataclass
class DeleteIdentitiesResponse:
    r"""DeleteIdentitiesResponse
    Returned in response to a successful <code>DeleteIdentities</code> operation.
    """
    
    unprocessed_identity_ids: Optional[list[shared_unprocessedidentityid.UnprocessedIdentityID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedIdentityIds') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userstackassociationerror as shared_userstackassociationerror


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateUserStackResult:
    errors: Optional[list[shared_userstackassociationerror.UserStackAssociationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

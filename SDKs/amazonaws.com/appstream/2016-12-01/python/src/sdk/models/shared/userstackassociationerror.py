import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userstackassociationerrorcode_enum as shared_userstackassociationerrorcode_enum
from ..shared import userstackassociation as shared_userstackassociation


@dataclass_json
@dataclasses.dataclass
class UserStackAssociationError:
    r"""UserStackAssociationError
    Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
    """
    
    error_code: Optional[shared_userstackassociationerrorcode_enum.UserStackAssociationErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    user_stack_association: Optional[shared_userstackassociation.UserStackAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStackAssociation') }})
    

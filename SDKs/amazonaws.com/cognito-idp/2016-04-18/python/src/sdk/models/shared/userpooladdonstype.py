import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advancedsecuritymodetype_enum as shared_advancedsecuritymodetype_enum


@dataclass_json
@dataclasses.dataclass
class UserPoolAddOnsType:
    r"""UserPoolAddOnsType
    The user pool add-ons type.
    """
    
    advanced_security_mode: shared_advancedsecuritymodetype_enum.AdvancedSecurityModeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdvancedSecurityMode') }})
    

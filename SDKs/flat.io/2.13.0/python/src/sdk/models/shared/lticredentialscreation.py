import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lmsname_enum as shared_lmsname_enum


@dataclass_json
@dataclasses.dataclass
class LtiCredentialsCreation:
    r"""LtiCredentialsCreation
    Creation of a couple of LTI 1.x OAuth credentials
    """
    
    lms: shared_lmsname_enum.LmsNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lms') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

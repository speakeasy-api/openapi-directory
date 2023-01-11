import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import efsauthorizationconfigiam_enum as shared_efsauthorizationconfigiam_enum


@dataclass_json
@dataclasses.dataclass
class EfsAuthorizationConfig:
    r"""EfsAuthorizationConfig
    The authorization configuration details for the Amazon EFS file system.
    """
    
    access_point_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPointId') }})
    iam: Optional[shared_efsauthorizationconfigiam_enum.EfsAuthorizationConfigIamEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iam') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optinstatus_enum as shared_optinstatus_enum


@dataclass_json
@dataclasses.dataclass
class OpsCenterIntegration:
    r"""OpsCenterIntegration
     Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
    """
    
    opt_in_status: Optional[shared_optinstatus_enum.OptInStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptInStatus') }})
    

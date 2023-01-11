import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsssmpatch as shared_awsssmpatch


@dataclass_json
@dataclasses.dataclass
class AwsSsmPatchComplianceDetails:
    r"""AwsSsmPatchComplianceDetails
    Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
    """
    
    patch: Optional[shared_awsssmpatch.AwsSsmPatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Patch') }})
    

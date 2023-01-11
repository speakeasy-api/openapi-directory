import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddRegionAction:
    r"""AddRegionAction
    Defines the Region and KMS key to add to the replication set. 
    """
    
    region_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    sse_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sseKmsKeyId') }})
    

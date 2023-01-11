import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ManualEvidence:
    r"""ManualEvidence
     Evidence that is uploaded to Audit Manager manually. 
    """
    
    s3_resource_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3ResourcePath') }})
    

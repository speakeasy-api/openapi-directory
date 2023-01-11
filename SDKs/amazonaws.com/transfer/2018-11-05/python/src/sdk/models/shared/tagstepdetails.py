import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3tag as shared_s3tag


@dataclass_json
@dataclasses.dataclass
class TagStepDetails:
    r"""TagStepDetails
    <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[list[shared_s3tag.S3Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location


@dataclass_json
@dataclasses.dataclass
class CodeSource:
    r"""CodeSource
    The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
    """
    
    s3: shared_s3location.S3Location = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    

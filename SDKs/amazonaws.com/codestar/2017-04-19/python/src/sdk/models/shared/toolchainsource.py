import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location


@dataclass_json
@dataclasses.dataclass
class ToolchainSource:
    r"""ToolchainSource
    The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
    """
    
    s3: shared_s3location.S3Location = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directorydescription as shared_directorydescription


@dataclass_json
@dataclasses.dataclass
class DescribeDirectoriesResult:
    r"""DescribeDirectoriesResult
    Contains the results of the <a>DescribeDirectories</a> operation.
    """
    
    directory_descriptions: Optional[list[shared_directorydescription.DirectoryDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryDescriptions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

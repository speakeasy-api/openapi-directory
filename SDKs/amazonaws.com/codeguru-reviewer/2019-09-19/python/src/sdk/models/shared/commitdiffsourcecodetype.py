import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommitDiffSourceCodeType:
    r"""CommitDiffSourceCodeType
     A type of <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType\"> <code>SourceCodeType</code> </a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review. 
    """
    
    destination_commit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCommit') }})
    merge_base_commit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergeBaseCommit') }})
    source_commit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCommit') }})
    

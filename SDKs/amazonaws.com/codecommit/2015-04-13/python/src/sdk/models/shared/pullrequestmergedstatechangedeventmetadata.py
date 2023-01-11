import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mergemetadata as shared_mergemetadata


@dataclass_json
@dataclasses.dataclass
class PullRequestMergedStateChangedEventMetadata:
    r"""PullRequestMergedStateChangedEventMetadata
    Returns information about the change in the merge state for a pull request event. 
    """
    
    destination_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationReference') }})
    merge_metadata: Optional[shared_mergemetadata.MergeMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeMetadata') }})
    repository_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branchdiffsourcecodetype as shared_branchdiffsourcecodetype
from ..shared import commitdiffsourcecodetype as shared_commitdiffsourcecodetype
from ..shared import repositoryheadsourcecodetype as shared_repositoryheadsourcecodetype
from ..shared import requestmetadata as shared_requestmetadata
from ..shared import s3bucketrepository as shared_s3bucketrepository


@dataclass_json
@dataclasses.dataclass
class SourceCodeType:
    r"""SourceCodeType
     Specifies the source code that is analyzed in a code review. 
    """
    
    branch_diff: Optional[shared_branchdiffsourcecodetype.BranchDiffSourceCodeType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchDiff') }})
    commit_diff: Optional[shared_commitdiffsourcecodetype.CommitDiffSourceCodeType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitDiff') }})
    repository_head: Optional[shared_repositoryheadsourcecodetype.RepositoryHeadSourceCodeType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryHead') }})
    request_metadata: Optional[shared_requestmetadata.RequestMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestMetadata') }})
    s3_bucket_repository: Optional[shared_s3bucketrepository.S3BucketRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketRepository') }})
    

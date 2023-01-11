import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositoryassociation as shared_repositoryassociation


@dataclass_json
@dataclasses.dataclass
class DescribeRepositoryAssociationResponse:
    repository_association: Optional[shared_repositoryassociation.RepositoryAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAssociation') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

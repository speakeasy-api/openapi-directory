import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositoryassociationsummary as shared_repositoryassociationsummary


@dataclass_json
@dataclasses.dataclass
class ListRepositoryAssociationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    repository_association_summaries: Optional[list[shared_repositoryassociationsummary.RepositoryAssociationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAssociationSummaries') }})
    

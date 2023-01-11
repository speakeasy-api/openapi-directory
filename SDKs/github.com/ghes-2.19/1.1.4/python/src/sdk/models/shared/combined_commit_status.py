import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository
from ..shared import simple_commit_status as shared_simple_commit_status


@dataclass_json
@dataclasses.dataclass
class CombinedCommitStatus:
    r"""CombinedCommitStatus
    Combined Commit Status
    """
    
    commit_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_url') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    statuses: list[shared_simple_commit_status.SimpleCommitStatus] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

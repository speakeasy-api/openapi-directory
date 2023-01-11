import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class DescribeRepositoriesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    

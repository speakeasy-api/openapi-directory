import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changesetinfo as shared_changesetinfo


@dataclass_json
@dataclasses.dataclass
class CreateChangesetResponse:
    changeset: Optional[shared_changesetinfo.ChangesetInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeset') }})
    

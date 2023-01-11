import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createdartifact as shared_createdartifact


@dataclass_json
@dataclasses.dataclass
class ListCreatedArtifactsResult:
    created_artifact_list: Optional[list[shared_createdartifact.CreatedArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedArtifactList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

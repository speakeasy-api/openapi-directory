import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifact as shared_artifact


@dataclass_json
@dataclasses.dataclass
class ListArtifactsResult:
    r"""ListArtifactsResult
    Represents the result of a list artifacts operation.
    """
    
    artifacts: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

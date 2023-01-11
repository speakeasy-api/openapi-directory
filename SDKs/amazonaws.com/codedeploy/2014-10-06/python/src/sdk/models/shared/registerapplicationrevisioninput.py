import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisionlocation as shared_revisionlocation


@dataclass_json
@dataclasses.dataclass
class RegisterApplicationRevisionInput:
    r"""RegisterApplicationRevisionInput
    Represents the input of a RegisterApplicationRevision operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: shared_revisionlocation.RevisionLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

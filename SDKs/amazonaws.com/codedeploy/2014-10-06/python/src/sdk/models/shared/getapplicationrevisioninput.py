import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisionlocation as shared_revisionlocation


@dataclass_json
@dataclasses.dataclass
class GetApplicationRevisionInput:
    r"""GetApplicationRevisionInput
    Represents the input of a <code>GetApplicationRevision</code> operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: shared_revisionlocation.RevisionLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    

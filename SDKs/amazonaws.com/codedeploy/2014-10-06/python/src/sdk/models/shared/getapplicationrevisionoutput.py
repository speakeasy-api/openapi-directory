import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisionlocation as shared_revisionlocation
from ..shared import genericrevisioninfo as shared_genericrevisioninfo


@dataclass_json
@dataclasses.dataclass
class GetApplicationRevisionOutput:
    r"""GetApplicationRevisionOutput
    Represents the output of a <code>GetApplicationRevision</code> operation.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    revision_info: Optional[shared_genericrevisioninfo.GenericRevisionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionInfo') }})
    

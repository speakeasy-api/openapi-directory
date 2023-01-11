import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisioninfo as shared_revisioninfo


@dataclass_json
@dataclasses.dataclass
class BatchGetApplicationRevisionsOutput:
    r"""BatchGetApplicationRevisionsOutput
    Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    revisions: Optional[list[shared_revisioninfo.RevisionInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

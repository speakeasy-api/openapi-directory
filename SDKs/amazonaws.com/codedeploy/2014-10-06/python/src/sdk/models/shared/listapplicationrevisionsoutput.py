import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisionlocation as shared_revisionlocation


@dataclass_json
@dataclasses.dataclass
class ListApplicationRevisionsOutput:
    r"""ListApplicationRevisionsOutput
    Represents the output of a <code>ListApplicationRevisions</code> operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    revisions: Optional[list[shared_revisionlocation.RevisionLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

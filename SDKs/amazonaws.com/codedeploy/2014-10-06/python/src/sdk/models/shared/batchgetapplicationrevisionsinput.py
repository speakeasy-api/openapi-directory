import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisionlocation as shared_revisionlocation


@dataclass_json
@dataclasses.dataclass
class BatchGetApplicationRevisionsInput:
    r"""BatchGetApplicationRevisionsInput
    Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revisions: list[shared_revisionlocation.RevisionLocation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    

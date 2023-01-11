import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssignmentSubmissionCommentCreation:
    r"""AssignmentSubmissionCommentCreation
    Creation of a assignment submission comment
    """
    
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

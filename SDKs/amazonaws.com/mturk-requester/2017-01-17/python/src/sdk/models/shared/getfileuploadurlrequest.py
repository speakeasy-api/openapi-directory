import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetFileUploadURLRequest:
    assignment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentId') }})
    question_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionIdentifier') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import answer as shared_answer


@dataclass_json
@dataclasses.dataclass
class UpdateAnswerOutput:
    r"""UpdateAnswerOutput
    Output of a update answer call.
    """
    
    answer: Optional[shared_answer.Answer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    lens_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    

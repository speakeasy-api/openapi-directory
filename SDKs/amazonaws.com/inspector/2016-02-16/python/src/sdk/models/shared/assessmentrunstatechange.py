import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentrunstate_enum as shared_assessmentrunstate_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentRunStateChange:
    r"""AssessmentRunStateChange
    Used as one of the elements of the <a>AssessmentRun</a> data type.
    """
    
    state: shared_assessmentrunstate_enum.AssessmentRunStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_changed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

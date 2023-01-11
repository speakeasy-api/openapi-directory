import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportdestinationtype_enum as shared_assessmentreportdestinationtype_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentReportsDestination:
    r"""AssessmentReportsDestination
     The location in which Audit Manager saves assessment reports for the given assessment. 
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_type: Optional[shared_assessmentreportdestinationtype_enum.AssessmentReportDestinationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationType') }})
    

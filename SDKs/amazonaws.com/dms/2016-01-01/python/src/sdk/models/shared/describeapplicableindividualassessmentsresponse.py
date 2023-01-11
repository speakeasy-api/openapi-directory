import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeApplicableIndividualAssessmentsResponse:
    r"""DescribeApplicableIndividualAssessmentsResponse
    <p/>
    """
    
    individual_assessment_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndividualAssessmentNames') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import correctiverecommendations as shared_correctiverecommendations
from ..shared import variationdetails as shared_variationdetails
from ..shared import namevaluelist as shared_namevaluelist


@dataclass_json
@dataclasses.dataclass
class ComplianceDetail:
    r"""ComplianceDetail
    This type is used by each listing violation that is returned under the violations container.
    """
    
    compliance_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    corrective_recommendations: Optional[shared_correctiverecommendations.CorrectiveRecommendations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctiveRecommendations') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    variation: Optional[shared_variationdetails.VariationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variation') }})
    violation_data: Optional[list[shared_namevaluelist.NameValueList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationData') }})
    

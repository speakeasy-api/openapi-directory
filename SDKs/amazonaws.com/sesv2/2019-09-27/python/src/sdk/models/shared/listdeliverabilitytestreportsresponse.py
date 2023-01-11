import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverabilitytestreport as shared_deliverabilitytestreport


@dataclass_json
@dataclasses.dataclass
class ListDeliverabilityTestReportsResponse:
    r"""ListDeliverabilityTestReportsResponse
    A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
    """
    
    deliverability_test_reports: list[shared_deliverabilitytestreport.DeliverabilityTestReport] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestReports') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

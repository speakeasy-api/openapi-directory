import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverabilityteststatus_enum as shared_deliverabilityteststatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateDeliverabilityTestReportResponse:
    r"""CreateDeliverabilityTestReportResponse
    Information about the predictive inbox placement test that you created.
    """
    
    deliverability_test_status: shared_deliverabilityteststatus_enum.DeliverabilityTestStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestStatus') }})
    report_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportId') }})
    

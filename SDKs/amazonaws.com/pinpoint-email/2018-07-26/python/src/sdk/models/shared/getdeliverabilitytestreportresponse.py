import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverabilitytestreport as shared_deliverabilitytestreport
from ..shared import ispplacement as shared_ispplacement
from ..shared import placementstatistics as shared_placementstatistics
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class GetDeliverabilityTestReportResponse:
    r"""GetDeliverabilityTestReportResponse
    The results of the predictive inbox placement test.
    """
    
    deliverability_test_report: shared_deliverabilitytestreport.DeliverabilityTestReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliverabilityTestReport') }})
    isp_placements: list[shared_ispplacement.IspPlacement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IspPlacements') }})
    overall_placement: shared_placementstatistics.PlacementStatistics = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallPlacement') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

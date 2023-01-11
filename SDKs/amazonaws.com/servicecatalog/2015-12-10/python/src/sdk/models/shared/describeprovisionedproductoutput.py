import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchdashboard as shared_cloudwatchdashboard
from ..shared import provisionedproductdetail as shared_provisionedproductdetail


@dataclass_json
@dataclasses.dataclass
class DescribeProvisionedProductOutput:
    cloud_watch_dashboards: Optional[list[shared_cloudwatchdashboard.CloudWatchDashboard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchDashboards') }})
    provisioned_product_detail: Optional[shared_provisionedproductdetail.ProvisionedProductDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductDetail') }})
    

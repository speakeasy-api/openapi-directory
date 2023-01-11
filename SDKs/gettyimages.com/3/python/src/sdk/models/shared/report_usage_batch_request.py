import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset_usage as shared_asset_usage


@dataclass_json
@dataclasses.dataclass
class ReportUsageBatchRequest:
    r"""ReportUsageBatchRequest
    Specifies the request information for the Batch Usages endpoint.
    """
    
    asset_usages: Optional[list[shared_asset_usage.AssetUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_usages') }})
    

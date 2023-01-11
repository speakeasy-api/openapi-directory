import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportUsageBatchResponse:
    r"""ReportUsageBatchResponse
    Specifies the response from the Batch Usages endpoint.
    """
    
    invalid_assets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_assets') }})
    total_asset_usages_processed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_asset_usages_processed') }})
    

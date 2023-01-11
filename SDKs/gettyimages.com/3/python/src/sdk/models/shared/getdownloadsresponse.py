import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historicaldownload as shared_historicaldownload


@dataclass_json
@dataclasses.dataclass
class GetDownloadsResponse:
    downloads: Optional[list[shared_historicaldownload.HistoricalDownload]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    

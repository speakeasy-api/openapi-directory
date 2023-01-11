import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import progressupdatestreamsummary as shared_progressupdatestreamsummary


@dataclass_json
@dataclasses.dataclass
class ListProgressUpdateStreamsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    progress_update_stream_summary_list: Optional[list[shared_progressupdatestreamsummary.ProgressUpdateStreamSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStreamSummaryList') }})
    

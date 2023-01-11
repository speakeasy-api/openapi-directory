import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import record as shared_record


@dataclass_json
@dataclasses.dataclass
class ListRecordsResponse:
    r"""ListRecordsResponse
    Returned for a successful ListRecordsRequest.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    dataset_deleted_after_requested_sync_count: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetDeletedAfterRequestedSyncCount') }})
    dataset_exists: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetExists') }})
    dataset_sync_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSyncCount') }})
    last_modified_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedBy') }})
    merged_dataset_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergedDatasetNames') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    records: Optional[list[shared_record.Record]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    sync_session_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSessionToken') }})
    

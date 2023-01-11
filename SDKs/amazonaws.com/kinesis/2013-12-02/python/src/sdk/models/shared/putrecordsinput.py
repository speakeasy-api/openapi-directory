import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putrecordsrequestentry as shared_putrecordsrequestentry


@dataclass_json
@dataclasses.dataclass
class PutRecordsInput:
    r"""PutRecordsInput
    A <code>PutRecords</code> request.
    """
    
    records: list[shared_putrecordsrequestentry.PutRecordsRequestEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

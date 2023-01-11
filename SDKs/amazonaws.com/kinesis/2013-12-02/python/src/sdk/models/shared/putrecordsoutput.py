import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum
from ..shared import putrecordsresultentry as shared_putrecordsresultentry


@dataclass_json
@dataclasses.dataclass
class PutRecordsOutput:
    r"""PutRecordsOutput
     <code>PutRecords</code> results.
    """
    
    records: list[shared_putrecordsresultentry.PutRecordsResultEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    encryption_type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    failed_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRecordCount') }})
    

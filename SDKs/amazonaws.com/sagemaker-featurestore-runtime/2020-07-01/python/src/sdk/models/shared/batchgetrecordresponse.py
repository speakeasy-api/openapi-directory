import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetrecorderror as shared_batchgetrecorderror
from ..shared import batchgetrecordresultdetail as shared_batchgetrecordresultdetail
from ..shared import batchgetrecordidentifier as shared_batchgetrecordidentifier


@dataclass_json
@dataclasses.dataclass
class BatchGetRecordResponse:
    errors: list[shared_batchgetrecorderror.BatchGetRecordError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    records: list[shared_batchgetrecordresultdetail.BatchGetRecordResultDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    unprocessed_identifiers: list[shared_batchgetrecordidentifier.BatchGetRecordIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedIdentifiers') }})
    

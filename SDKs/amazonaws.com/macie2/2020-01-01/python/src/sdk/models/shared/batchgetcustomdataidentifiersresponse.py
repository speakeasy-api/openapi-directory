import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetcustomdataidentifiersummary as shared_batchgetcustomdataidentifiersummary


@dataclass_json
@dataclasses.dataclass
class BatchGetCustomDataIdentifiersResponse:
    custom_data_identifiers: Optional[list[shared_batchgetcustomdataidentifiersummary.BatchGetCustomDataIdentifierSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifiers') }})
    not_found_identifier_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notFoundIdentifierIds') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bulkemailentryresult as shared_bulkemailentryresult


@dataclass_json
@dataclasses.dataclass
class SendBulkEmailResponse:
    r"""SendBulkEmailResponse
    The following data is returned in JSON format by the service.
    """
    
    bulk_email_entry_results: list[shared_bulkemailentryresult.BulkEmailEntryResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkEmailEntryResults') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FetchPageRequest:
    r"""FetchPageRequest
    Specifies the details of the page to be fetched.
    """
    
    next_page_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    

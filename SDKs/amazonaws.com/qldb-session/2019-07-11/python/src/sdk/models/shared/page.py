import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valueholder as shared_valueholder


@dataclass_json
@dataclasses.dataclass
class Page:
    r"""Page
    Contains details of the fetched page.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    values: Optional[list[shared_valueholder.ValueHolder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    

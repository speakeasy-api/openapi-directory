import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principal as shared_principal


@dataclass_json
@dataclasses.dataclass
class ListPrincipalsForPortfolioOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    principals: Optional[list[shared_principal.Principal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principals') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliodetail as shared_portfoliodetail


@dataclass_json
@dataclasses.dataclass
class ListPortfoliosOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    portfolio_details: Optional[list[shared_portfoliodetail.PortfolioDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioDetails') }})
    

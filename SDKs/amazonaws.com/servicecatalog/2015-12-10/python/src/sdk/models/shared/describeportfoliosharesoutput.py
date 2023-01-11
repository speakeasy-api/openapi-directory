import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliosharedetail as shared_portfoliosharedetail


@dataclass_json
@dataclasses.dataclass
class DescribePortfolioSharesOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    portfolio_share_details: Optional[list[shared_portfoliosharedetail.PortfolioShareDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareDetails') }})
    

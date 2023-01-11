import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliodetail as shared_portfoliodetail
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePortfolioOutput:
    portfolio_detail: Optional[shared_portfoliodetail.PortfolioDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioDetail') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

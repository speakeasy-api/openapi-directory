import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetdetail as shared_budgetdetail
from ..shared import portfoliodetail as shared_portfoliodetail
from ..shared import tagoptiondetail as shared_tagoptiondetail
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class DescribePortfolioOutput:
    budgets: Optional[list[shared_budgetdetail.BudgetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    portfolio_detail: Optional[shared_portfoliodetail.PortfolioDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioDetail') }})
    tag_options: Optional[list[shared_tagoptiondetail.TagOptionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

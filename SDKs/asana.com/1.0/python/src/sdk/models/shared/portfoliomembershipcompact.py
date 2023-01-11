import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliocompact as shared_portfoliocompact
from ..shared import usercompact as shared_usercompact


@dataclass_json
@dataclasses.dataclass
class PortfolioMembershipCompact:
    r"""PortfolioMembershipCompact
    This object determines if a user is a member of a portfolio.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    portfolio: Optional[shared_portfoliocompact.PortfolioCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    user: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portfoliosharetype_enum as shared_portfoliosharetype_enum


@dataclass_json
@dataclasses.dataclass
class RejectPortfolioShareInput:
    portfolio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    portfolio_share_type: Optional[shared_portfoliosharetype_enum.PortfolioShareTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareType') }})
    

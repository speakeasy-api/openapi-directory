import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DisassociatePrincipalFromPortfolioInput:
    portfolio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    principal_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalARN') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    

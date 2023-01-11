import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principaltype_enum as shared_principaltype_enum


@dataclass_json
@dataclasses.dataclass
class AssociatePrincipalWithPortfolioInput:
    portfolio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    principal_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalARN') }})
    principal_type: shared_principaltype_enum.PrincipalTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    

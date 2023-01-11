import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationnodetype_enum as shared_organizationnodetype_enum


@dataclass_json
@dataclasses.dataclass
class ListOrganizationPortfolioAccessInput:
    organization_node_type: shared_organizationnodetype_enum.OrganizationNodeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNodeType') }})
    portfolio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    

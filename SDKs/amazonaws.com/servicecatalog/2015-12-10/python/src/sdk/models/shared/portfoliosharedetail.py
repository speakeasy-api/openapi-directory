import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describeportfoliosharetype_enum as shared_describeportfoliosharetype_enum


@dataclass_json
@dataclasses.dataclass
class PortfolioShareDetail:
    r"""PortfolioShareDetail
    Information about the portfolio share.
    """
    
    accepted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accepted') }})
    principal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    share_tag_options: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareTagOptions') }})
    type: Optional[shared_describeportfoliosharetype_enum.DescribePortfolioShareTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

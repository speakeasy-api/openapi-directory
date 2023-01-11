import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountattribute as shared_accountattribute


@dataclass_json
@dataclasses.dataclass
class DescribeAccountAttributesResponse:
    attributes: Optional[list[shared_accountattribute.AccountAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    

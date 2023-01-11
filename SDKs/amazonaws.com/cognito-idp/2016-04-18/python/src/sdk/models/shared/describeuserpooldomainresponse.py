import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaindescriptiontype as shared_domaindescriptiontype


@dataclass_json
@dataclasses.dataclass
class DescribeUserPoolDomainResponse:
    domain_description: Optional[shared_domaindescriptiontype.DomainDescriptionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDescription') }})
    

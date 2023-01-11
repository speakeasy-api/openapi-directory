import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeCopyProductStatusInput:
    copy_product_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyProductToken') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    

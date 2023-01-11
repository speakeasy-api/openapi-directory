import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactmethod as shared_contactmethod


@dataclass_json
@dataclasses.dataclass
class GetContactMethodsResult:
    contact_methods: Optional[list[shared_contactmethod.ContactMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactMethods') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceptcodevalidation_enum as shared_acceptcodevalidation_enum
from ..shared import accepttype_enum as shared_accepttype_enum


@dataclass_json
@dataclasses.dataclass
class AcceptPageRequest:
    accept_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptCode') }})
    accept_type: shared_accepttype_enum.AcceptTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptType') }})
    page_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageId') }})
    accept_code_validation: Optional[shared_acceptcodevalidation_enum.AcceptCodeValidationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptCodeValidation') }})
    contact_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelId') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    

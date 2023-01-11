import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import phone as shared_phone


@dataclass_json
@dataclasses.dataclass
class PhoneList:
    r"""PhoneList
    Phones List
    """
    
    phones: list[shared_phone.Phone] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

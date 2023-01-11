import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truststoreitems as shared_truststoreitems


@dataclass_json
@dataclasses.dataclass
class TruststoreInfo:
    aliases: Optional[list[shared_truststoreitems.TruststoreItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    exists: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exists') }})
    

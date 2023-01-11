import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lag as shared_lag


@dataclass_json
@dataclasses.dataclass
class Lags:
    lags: Optional[list[shared_lag.Lag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lags') }})
    

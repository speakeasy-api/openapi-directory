import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratetable as shared_ratetable


@dataclass_json
@dataclasses.dataclass
class RateTableResponse:
    r"""RateTableResponse
    The response container for with information on a seller's shipping rate tables.
    """
    
    rate_tables: Optional[list[shared_ratetable.RateTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateTables') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReferrerTraffic:
    r"""ReferrerTraffic
    Referrer Traffic
    """
    
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    referrer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    uniques: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniques') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkspercentilesitem as shared_linkspercentilesitem


@dataclass_json
@dataclasses.dataclass
class LinksPercentiles:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    percentiles: list[shared_linkspercentilesitem.LinksPercentilesItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentiles') }})
    

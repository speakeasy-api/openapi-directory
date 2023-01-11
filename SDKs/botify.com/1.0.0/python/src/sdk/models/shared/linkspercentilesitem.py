import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinksPercentilesItem:
    avg: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    metric_total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric_total') }})
    min: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    url_total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url_total') }})
    

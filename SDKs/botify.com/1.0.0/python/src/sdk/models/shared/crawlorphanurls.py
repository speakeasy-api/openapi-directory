import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CrawlOrphanUrLs:
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    visits: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visits') }})
    

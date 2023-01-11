import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PageRankLost:
    external: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    non_crawled: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_crawled') }})
    robots_txt: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robots_txt') }})
    

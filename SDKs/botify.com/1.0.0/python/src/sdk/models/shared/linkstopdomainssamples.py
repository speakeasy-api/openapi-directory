import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinksTopDomainsSamples:
    sources: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    unique_links: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_links') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

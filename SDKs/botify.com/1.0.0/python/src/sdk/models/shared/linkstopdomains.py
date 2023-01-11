import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkstopdomainssamples as shared_linkstopdomainssamples


@dataclass_json
@dataclasses.dataclass
class LinksTopDomains:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    follow_links: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_links') }})
    follow_samples: list[shared_linkstopdomainssamples.LinksTopDomainsSamples] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_samples') }})
    nofollow_links: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nofollow_links') }})
    nofollow_samples: list[shared_linkstopdomainssamples.LinksTopDomainsSamples] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nofollow_samples') }})
    unique_follow_links: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_follow_links') }})
    unique_nofollow_links: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_nofollow_links') }})
    

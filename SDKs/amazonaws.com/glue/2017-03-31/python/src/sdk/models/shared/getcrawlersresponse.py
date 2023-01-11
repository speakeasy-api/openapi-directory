import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawler as shared_crawler


@dataclass_json
@dataclasses.dataclass
class GetCrawlersResponse:
    crawlers: Optional[list[shared_crawler.Crawler]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Crawlers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

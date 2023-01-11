import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawl as shared_crawl


@dataclass_json
@dataclasses.dataclass
class CrawlerNodeDetails:
    r"""CrawlerNodeDetails
    The details of a Crawler node present in the workflow.
    """
    
    crawls: Optional[list[shared_crawl.Crawl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Crawls') }})
    

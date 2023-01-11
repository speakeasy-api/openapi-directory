import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlerlineagesettings_enum as shared_crawlerlineagesettings_enum


@dataclass_json
@dataclasses.dataclass
class LineageConfiguration:
    r"""LineageConfiguration
    Specifies data lineage configuration settings for the crawler.
    """
    
    crawler_lineage_settings: Optional[shared_crawlerlineagesettings_enum.CrawlerLineageSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerLineageSettings') }})
    

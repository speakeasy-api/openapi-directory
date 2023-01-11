import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateCrawlerScheduleRequest:
    crawler_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerName') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    

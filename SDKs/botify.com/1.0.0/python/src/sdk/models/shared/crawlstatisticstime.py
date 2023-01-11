import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlstatisticstimepoint as shared_crawlstatisticstimepoint


@dataclass_json
@dataclasses.dataclass
class CrawlStatisticsTime:
    avg_delay: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_delay') }})
    avg_size: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_size') }})
    frequency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    http_code_2xx: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code_2xx') }})
    http_code_3xx: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code_3xx') }})
    http_code_4xx: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code_4xx') }})
    http_code_5xx: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code_5xx') }})
    http_code_xxx: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code_xxx') }})
    last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_update_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    new_urls: list[shared_crawlstatisticstimepoint.CrawlStatisticsTimePoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_urls') }})
    

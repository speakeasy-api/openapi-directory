import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlermetrics as shared_crawlermetrics


@dataclass_json
@dataclasses.dataclass
class GetCrawlerMetricsResponse:
    crawler_metrics_list: Optional[list[shared_crawlermetrics.CrawlerMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerMetricsList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

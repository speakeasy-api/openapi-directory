import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlstate_enum as shared_crawlstate_enum
from ..shared import logicaloperator_enum as shared_logicaloperator_enum
from ..shared import jobrunstate_enum as shared_jobrunstate_enum


@dataclass_json
@dataclasses.dataclass
class Condition:
    r"""Condition
    Defines a condition under which a trigger fires.
    """
    
    crawl_state: Optional[shared_crawlstate_enum.CrawlStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlState') }})
    crawler_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerName') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    logical_operator: Optional[shared_logicaloperator_enum.LogicalOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogicalOperator') }})
    state: Optional[shared_jobrunstate_enum.JobRunStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

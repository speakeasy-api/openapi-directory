import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawlernodedetails as shared_crawlernodedetails
from ..shared import jobnodedetails as shared_jobnodedetails
from ..shared import triggernodedetails as shared_triggernodedetails
from ..shared import nodetype_enum as shared_nodetype_enum


@dataclass_json
@dataclasses.dataclass
class Node:
    r"""Node
    A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
    """
    
    crawler_details: Optional[shared_crawlernodedetails.CrawlerNodeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerDetails') }})
    job_details: Optional[shared_jobnodedetails.JobNodeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    trigger_details: Optional[shared_triggernodedetails.TriggerNodeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerDetails') }})
    type: Optional[shared_nodetype_enum.NodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    unique_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueId') }})
    

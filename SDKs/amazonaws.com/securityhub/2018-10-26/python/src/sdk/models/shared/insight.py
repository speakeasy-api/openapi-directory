import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecurityfindingfilters as shared_awssecurityfindingfilters


@dataclass_json
@dataclasses.dataclass
class Insight:
    r"""Insight
    Contains information about a Security Hub insight.
    """
    
    filters: shared_awssecurityfindingfilters.AwsSecurityFindingFilters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_attribute: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    insight_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

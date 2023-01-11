import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightimpactgraphedge as shared_insightimpactgraphedge


@dataclass_json
@dataclasses.dataclass
class InsightImpactGraphService:
    r"""InsightImpactGraphService
    Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. 
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    edges: Optional[list[shared_insightimpactgraphedge.InsightImpactGraphEdge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edges') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    reference_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

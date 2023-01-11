import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criterionadditionalproperties as shared_criterionadditionalproperties


@dataclass_json
@dataclasses.dataclass
class FindingCriteria:
    r"""FindingCriteria
    Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    """
    
    criterion: Optional[dict[str, shared_criterionadditionalproperties.CriterionAdditionalProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterion') }})
    

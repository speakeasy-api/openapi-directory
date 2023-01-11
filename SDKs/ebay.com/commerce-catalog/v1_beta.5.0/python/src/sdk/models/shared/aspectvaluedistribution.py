import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AspectValueDistribution:
    r"""AspectValueDistribution
    This type contains information about one value of a specified aspect. This value serves as a product refinement.
    """
    
    localized_aspect_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedAspectValue') }})
    match_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchCount') }})
    refinement_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refinementHref') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aspectvaluedistribution as shared_aspectvaluedistribution


@dataclass_json
@dataclasses.dataclass
class AspectDistribution:
    r"""AspectDistribution
    This type contains information about one category aspect that is associated with a specified category.
    """
    
    aspect_value_distributions: Optional[list[shared_aspectvaluedistribution.AspectValueDistribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectValueDistributions') }})
    localized_aspect_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedAspectName') }})
    

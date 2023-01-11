import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensioncontribution as shared_dimensioncontribution


@dataclass_json
@dataclasses.dataclass
class ContributionMatrix:
    r"""ContributionMatrix
    Details about dimensions that contributed to an anomaly.
    """
    
    dimension_contribution_list: Optional[list[shared_dimensioncontribution.DimensionContribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionContributionList') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvaluecontribution as shared_dimensionvaluecontribution


@dataclass_json
@dataclasses.dataclass
class DimensionContribution:
    r"""DimensionContribution
    Details about a dimension that contributed to an anomaly.
    """
    
    dimension_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value_contribution_list: Optional[list[shared_dimensionvaluecontribution.DimensionValueContribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValueContributionList') }})
    

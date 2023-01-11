import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selectionrule as shared_selectionrule


@dataclass_json
@dataclasses.dataclass
class CampaignCriterion:
    r"""CampaignCriterion
    This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
    """
    
    auto_select_future_inventory: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSelectFutureInventory') }})
    criterion_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterionType') }})
    selection_rules: Optional[list[shared_selectionrule.SelectionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionRules') }})
    

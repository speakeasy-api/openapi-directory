import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rolloutpercentageitemmodel as shared_rolloutpercentageitemmodel
from ..shared import rolloutrulemodel as shared_rolloutrulemodel


@dataclass_json
@dataclasses.dataclass
class UpdateSettingValueModel:
    rollout_percentage_items: Optional[list[shared_rolloutpercentageitemmodel.RolloutPercentageItemModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutPercentageItems') }})
    rollout_rules: Optional[list[shared_rolloutrulemodel.RolloutRuleModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutRules') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

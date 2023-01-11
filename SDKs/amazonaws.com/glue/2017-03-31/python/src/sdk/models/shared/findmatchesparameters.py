import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FindMatchesParameters:
    r"""FindMatchesParameters
    The parameters to configure the find matches transform.
    """
    
    accuracy_cost_tradeoff: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccuracyCostTradeoff') }})
    enforce_provided_labels: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceProvidedLabels') }})
    precision_recall_tradeoff: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrecisionRecallTradeoff') }})
    primary_key_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryKeyColumnName') }})
    

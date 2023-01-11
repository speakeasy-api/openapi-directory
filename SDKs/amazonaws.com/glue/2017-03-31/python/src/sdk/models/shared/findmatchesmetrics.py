import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnimportance as shared_columnimportance
from ..shared import confusionmatrix as shared_confusionmatrix


@dataclass_json
@dataclasses.dataclass
class FindMatchesMetrics:
    r"""FindMatchesMetrics
    The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
    """
    
    area_under_pr_curve: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AreaUnderPRCurve') }})
    column_importances: Optional[list[shared_columnimportance.ColumnImportance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnImportances') }})
    confusion_matrix: Optional[shared_confusionmatrix.ConfusionMatrix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfusionMatrix') }})
    f1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1') }})
    precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    recall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    

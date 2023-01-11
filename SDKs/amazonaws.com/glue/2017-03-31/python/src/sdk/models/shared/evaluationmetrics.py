import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findmatchesmetrics as shared_findmatchesmetrics
from ..shared import transformtype_enum as shared_transformtype_enum


@dataclass_json
@dataclasses.dataclass
class EvaluationMetrics:
    r"""EvaluationMetrics
    Evaluation metrics provide an estimate of the quality of your machine learning transform.
    """
    
    transform_type: shared_transformtype_enum.TransformTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformType') }})
    find_matches_metrics: Optional[shared_findmatchesmetrics.FindMatchesMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesMetrics') }})
    

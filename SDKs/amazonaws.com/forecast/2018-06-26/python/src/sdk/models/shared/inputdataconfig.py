import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supplementaryfeature as shared_supplementaryfeature


@dataclass_json
@dataclasses.dataclass
class InputDataConfig:
    r"""InputDataConfig
    The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
    """
    
    dataset_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetGroupArn') }})
    supplementary_features: Optional[list[shared_supplementaryfeature.SupplementaryFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryFeatures') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class TrainingData:
    r"""TrainingData
    The dataset used for training.
    """
    
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assets') }})
    

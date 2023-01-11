import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class TestingData:
    r"""TestingData
    The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
    """
    
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assets') }})
    auto_create: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoCreate') }})
    

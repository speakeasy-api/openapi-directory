import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duplicateproductvalueconfiguration as shared_duplicateproductvalueconfiguration
from ..shared import inputconfiguration as shared_inputconfiguration


@dataclass_json
@dataclasses.dataclass
class StartManualImportRequest:
    r"""StartManualImportRequest
    The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
    """
    
    input: shared_inputconfiguration.InputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    duplicate_product_sku_configuration: Optional[shared_duplicateproductvalueconfiguration.DuplicateProductValueConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateProductSkuConfiguration') }})
    

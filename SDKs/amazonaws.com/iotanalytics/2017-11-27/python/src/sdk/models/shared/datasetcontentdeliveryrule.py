import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetcontentdeliverydestination as shared_datasetcontentdeliverydestination


@dataclass_json
@dataclasses.dataclass
class DatasetContentDeliveryRule:
    r"""DatasetContentDeliveryRule
    When dataset contents are created, they are delivered to destination specified here.
    """
    
    destination: shared_datasetcontentdeliverydestination.DatasetContentDeliveryDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    entry_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryName') }})
    

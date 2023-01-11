import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema:
    batch_item_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemUuid') }})
    

import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21tags1Percent7BtagIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema:
    resources: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

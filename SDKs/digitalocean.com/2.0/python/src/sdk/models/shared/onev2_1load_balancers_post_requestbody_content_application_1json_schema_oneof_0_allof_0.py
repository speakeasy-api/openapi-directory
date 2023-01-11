import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0:
    droplet_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    

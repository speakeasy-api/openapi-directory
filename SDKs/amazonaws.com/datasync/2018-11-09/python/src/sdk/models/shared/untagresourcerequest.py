import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UntagResourceRequest:
    r"""UntagResourceRequest
    UntagResourceRequest
    """
    
    keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    

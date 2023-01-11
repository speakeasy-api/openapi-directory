import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModifyLunaClientRequest:
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    client_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientArn') }})
    

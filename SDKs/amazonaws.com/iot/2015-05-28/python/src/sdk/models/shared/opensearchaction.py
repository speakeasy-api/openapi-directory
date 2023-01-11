import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OpenSearchAction:
    r"""OpenSearchAction
    Describes an action that writes data to an Amazon OpenSearch Service domain.
    """
    
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    index: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ClassifyDocumentRequest:
    endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    

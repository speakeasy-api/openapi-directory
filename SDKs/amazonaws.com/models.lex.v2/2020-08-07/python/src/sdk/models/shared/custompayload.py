import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomPayload:
    r"""CustomPayload
    A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
    """
    
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

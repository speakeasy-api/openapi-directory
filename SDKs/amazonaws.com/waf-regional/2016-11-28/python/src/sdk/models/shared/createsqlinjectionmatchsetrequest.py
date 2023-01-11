import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateSQLInjectionMatchSetRequest:
    r"""CreateSQLInjectionMatchSetRequest
    A request to create a <a>SqlInjectionMatchSet</a>.
    """
    
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

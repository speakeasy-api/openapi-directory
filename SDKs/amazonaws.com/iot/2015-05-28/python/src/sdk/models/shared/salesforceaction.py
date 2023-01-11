import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SalesforceAction:
    r"""SalesforceAction
    Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
    """
    
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

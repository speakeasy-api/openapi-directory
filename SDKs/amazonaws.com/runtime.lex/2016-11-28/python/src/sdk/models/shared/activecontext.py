import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activecontexttimetolive as shared_activecontexttimetolive


@dataclass_json
@dataclasses.dataclass
class ActiveContext:
    r"""ActiveContext
    A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    time_to_live: shared_activecontexttimetolive.ActiveContextTimeToLive = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLive') }})
    

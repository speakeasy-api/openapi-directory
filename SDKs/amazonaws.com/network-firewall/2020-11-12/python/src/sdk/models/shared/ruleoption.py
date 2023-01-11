import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RuleOption:
    r"""RuleOption
    Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
    """
    
    keyword: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keyword') }})
    settings: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

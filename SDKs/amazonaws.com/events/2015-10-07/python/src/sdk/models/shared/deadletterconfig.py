import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeadLetterConfig:
    r"""DeadLetterConfig
    A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    

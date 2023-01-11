import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPProperties:
    r"""HTTPProperties
    A complex type that contains the name of an HTTP namespace.
    """
    
    http_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpName') }})
    

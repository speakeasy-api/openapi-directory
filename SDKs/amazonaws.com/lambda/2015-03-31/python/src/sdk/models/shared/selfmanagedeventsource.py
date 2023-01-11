import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SelfManagedEventSource:
    r"""SelfManagedEventSource
    The self-managed Apache Kafka cluster for your event source.
    """
    
    endpoints: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    

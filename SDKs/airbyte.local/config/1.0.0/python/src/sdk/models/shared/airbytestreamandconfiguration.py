import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import airbytestreamconfiguration as shared_airbytestreamconfiguration
from ..shared import airbytestream as shared_airbytestream


@dataclass_json
@dataclasses.dataclass
class AirbyteStreamAndConfiguration:
    r"""AirbyteStreamAndConfiguration
    each stream is split in two parts; the immutable schema from source and mutable configuration for destination
    """
    
    config: Optional[shared_airbytestreamconfiguration.AirbyteStreamConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    stream: Optional[shared_airbytestream.AirbyteStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

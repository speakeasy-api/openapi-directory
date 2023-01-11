import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import airbytestreamandconfiguration as shared_airbytestreamandconfiguration


@dataclass_json
@dataclasses.dataclass
class AirbyteCatalog:
    r"""AirbyteCatalog
    describes the available schema (catalog).
    """
    
    streams: list[shared_airbytestreamandconfiguration.AirbyteStreamAndConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streams') }})
    

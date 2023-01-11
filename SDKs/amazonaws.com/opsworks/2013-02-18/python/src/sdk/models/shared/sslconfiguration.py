import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SslConfiguration:
    r"""SslConfiguration
    Describes an app's SSL configuration.
    """
    
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    private_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKey') }})
    chain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Chain') }})
    

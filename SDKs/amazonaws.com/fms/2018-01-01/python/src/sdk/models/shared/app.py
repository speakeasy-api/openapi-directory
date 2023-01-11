import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class App:
    r"""App
    An individual Firewall Manager application.
    """
    
    app_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppName') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    protocol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    

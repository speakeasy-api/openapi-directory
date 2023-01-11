import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomPlugin:
    r"""CustomPlugin
    A plugin is an AWS resource that contains the code that defines a connector's logic.
    """
    
    custom_plugin_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPluginArn') }})
    revision: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    

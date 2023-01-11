import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customplugin as shared_customplugin


@dataclass_json
@dataclasses.dataclass
class Plugin:
    r"""Plugin
    A plugin is an AWS resource that contains the code that defines your connector logic. 
    """
    
    custom_plugin: shared_customplugin.CustomPlugin = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPlugin') }})
    

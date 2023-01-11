import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_configureautomatictransitionslink as shared_links_configureautomatictransitionslink


@dataclass_json
@dataclasses.dataclass
class AutomaticTransitionInfoLinks:
    configure: shared_links_configureautomatictransitionslink.LinksConfigureAutomaticTransitionsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configure') }})
    

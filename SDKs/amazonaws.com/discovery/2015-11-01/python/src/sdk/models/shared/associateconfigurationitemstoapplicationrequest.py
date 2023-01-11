import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateConfigurationItemsToApplicationRequest:
    application_configuration_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationConfigurationId') }})
    configuration_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationIds') }})
    

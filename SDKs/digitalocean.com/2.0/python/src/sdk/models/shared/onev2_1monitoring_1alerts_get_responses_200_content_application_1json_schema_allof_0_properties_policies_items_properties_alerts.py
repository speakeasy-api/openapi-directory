import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack:
    channel: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts:
    email: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    slack: list[Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack') }})
    

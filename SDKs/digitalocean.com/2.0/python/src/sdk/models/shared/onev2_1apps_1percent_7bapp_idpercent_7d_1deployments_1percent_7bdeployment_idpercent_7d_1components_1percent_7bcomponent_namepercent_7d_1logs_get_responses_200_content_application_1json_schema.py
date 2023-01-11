import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema:
    historic_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historic_urls') }})
    live_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('live_url') }})
    

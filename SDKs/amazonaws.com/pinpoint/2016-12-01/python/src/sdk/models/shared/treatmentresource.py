import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdeliveryconfiguration as shared_customdeliveryconfiguration
from ..shared import messageconfiguration as shared_messageconfiguration
from ..shared import schedule as shared_schedule
from ..shared import campaignstate as shared_campaignstate
from ..shared import templateconfiguration as shared_templateconfiguration


@dataclass_json
@dataclasses.dataclass
class TreatmentResource:
    r"""TreatmentResource
    Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    size_percent: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizePercent') }})
    custom_delivery_configuration: Optional[shared_customdeliveryconfiguration.CustomDeliveryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDeliveryConfiguration') }})
    message_configuration: Optional[shared_messageconfiguration.MessageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    state: Optional[shared_campaignstate.CampaignState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    template_configuration: Optional[shared_templateconfiguration.TemplateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    treatment_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentDescription') }})
    treatment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentName') }})
    

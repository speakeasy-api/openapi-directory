import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliveryoptions as shared_deliveryoptions
from ..shared import reputationoptions as shared_reputationoptions
from ..shared import sendingoptions as shared_sendingoptions
from ..shared import suppressionoptions as shared_suppressionoptions
from ..shared import tag as shared_tag
from ..shared import trackingoptions as shared_trackingoptions


@dataclass_json
@dataclasses.dataclass
class GetConfigurationSetResponse:
    r"""GetConfigurationSetResponse
    Information about a configuration set.
    """
    
    configuration_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    delivery_options: Optional[shared_deliveryoptions.DeliveryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryOptions') }})
    reputation_options: Optional[shared_reputationoptions.ReputationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReputationOptions') }})
    sending_options: Optional[shared_sendingoptions.SendingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingOptions') }})
    suppression_options: Optional[shared_suppressionoptions.SuppressionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionOptions') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tracking_options: Optional[shared_trackingoptions.TrackingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingOptions') }})
    

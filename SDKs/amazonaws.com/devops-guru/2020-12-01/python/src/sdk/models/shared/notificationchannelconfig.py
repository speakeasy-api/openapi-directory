import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snschannelconfig as shared_snschannelconfig


@dataclass_json
@dataclasses.dataclass
class NotificationChannelConfig:
    r"""NotificationChannelConfig
     Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
    """
    
    sns: shared_snschannelconfig.SnsChannelConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sns') }})
    

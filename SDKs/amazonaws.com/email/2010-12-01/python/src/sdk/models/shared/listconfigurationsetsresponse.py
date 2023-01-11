import dataclasses
from typing import Optional
from ..shared import configurationset as shared_configurationset


@dataclasses.dataclass
class ListConfigurationSetsResponse:
    r"""ListConfigurationSetsResponse
    A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.
    """
    
    configuration_sets: Optional[list[shared_configurationset.ConfigurationSet]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    

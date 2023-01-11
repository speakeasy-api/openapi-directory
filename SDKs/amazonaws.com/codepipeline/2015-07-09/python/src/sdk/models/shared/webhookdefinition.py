import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookauthenticationtype_enum as shared_webhookauthenticationtype_enum
from ..shared import webhookauthconfiguration as shared_webhookauthconfiguration
from ..shared import webhookfilterrule as shared_webhookfilterrule


@dataclass_json
@dataclasses.dataclass
class WebhookDefinition:
    r"""WebhookDefinition
    Represents information about a webhook and its definition.
    """
    
    authentication: shared_webhookauthenticationtype_enum.WebhookAuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    authentication_configuration: shared_webhookauthconfiguration.WebhookAuthConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationConfiguration') }})
    filters: list[shared_webhookfilterrule.WebhookFilterRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAction') }})
    target_pipeline: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPipeline') }})
    

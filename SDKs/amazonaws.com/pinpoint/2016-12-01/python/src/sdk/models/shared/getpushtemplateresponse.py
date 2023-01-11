import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pushnotificationtemplateresponse as shared_pushnotificationtemplateresponse


@dataclass_json
@dataclasses.dataclass
class GetPushTemplateResponse:
    push_notification_template_response: shared_pushnotificationtemplateresponse.PushNotificationTemplateResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushNotificationTemplateResponse') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smstemplateresponse as shared_smstemplateresponse


@dataclass_json
@dataclasses.dataclass
class GetSmsTemplateResponse:
    sms_template_response: shared_smstemplateresponse.SmsTemplateResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSTemplateResponse') }})
    

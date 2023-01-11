import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailtemplateresponse as shared_emailtemplateresponse


@dataclass_json
@dataclasses.dataclass
class GetEmailTemplateResponse:
    email_template_response: shared_emailtemplateresponse.EmailTemplateResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailTemplateResponse') }})
    

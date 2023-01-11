import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inapptemplateresponse as shared_inapptemplateresponse


@dataclass_json
@dataclasses.dataclass
class GetInAppTemplateResponse:
    in_app_template_response: shared_inapptemplateresponse.InAppTemplateResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppTemplateResponse') }})
    

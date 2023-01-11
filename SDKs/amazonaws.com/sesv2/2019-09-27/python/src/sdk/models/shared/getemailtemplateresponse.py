import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailtemplatecontent as shared_emailtemplatecontent


@dataclass_json
@dataclasses.dataclass
class GetEmailTemplateResponse:
    r"""GetEmailTemplateResponse
    The following element is returned by the service.
    """
    
    template_content: shared_emailtemplatecontent.EmailTemplateContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateContent') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templatesresponse as shared_templatesresponse


@dataclass_json
@dataclasses.dataclass
class ListTemplatesResponse:
    templates_response: shared_templatesresponse.TemplatesResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatesResponse') }})
    

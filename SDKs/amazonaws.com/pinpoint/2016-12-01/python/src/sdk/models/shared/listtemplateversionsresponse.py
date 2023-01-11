import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templateversionsresponse as shared_templateversionsresponse


@dataclass_json
@dataclasses.dataclass
class ListTemplateVersionsResponse:
    template_versions_response: shared_templateversionsresponse.TemplateVersionsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateVersionsResponse') }})
    

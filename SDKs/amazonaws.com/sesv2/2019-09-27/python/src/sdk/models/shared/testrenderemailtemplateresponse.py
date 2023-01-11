import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TestRenderEmailTemplateResponse:
    r"""TestRenderEmailTemplateResponse
    The following element is returned by the service.
    """
    
    rendered_template: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenderedTemplate') }})
    

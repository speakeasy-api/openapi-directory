import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnvironmentTemplateFilter:
    r"""EnvironmentTemplateFilter
    A search filter for environment templates.
    """
    
    major_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    

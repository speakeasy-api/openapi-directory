import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field


@dataclass_json
@dataclasses.dataclass
class PipelineObject:
    r"""PipelineObject
    Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
    """
    
    fields: list[shared_field.Field] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

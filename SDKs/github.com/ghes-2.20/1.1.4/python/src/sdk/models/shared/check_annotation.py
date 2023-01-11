import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CheckAnnotation:
    r"""CheckAnnotation
    Check Annotation
    """
    
    annotation_level: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_level') }})
    blob_href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_href') }})
    end_column: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    end_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    raw_details: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_details') }})
    start_column: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    start_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

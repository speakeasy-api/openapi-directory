import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3objectsource as shared_s3objectsource


@dataclass_json
@dataclasses.dataclass
class TemplateVersionSourceInput:
    r"""TemplateVersionSourceInput
    Template version source data.
    """
    
    s3: Optional[shared_s3objectsource.S3ObjectSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    

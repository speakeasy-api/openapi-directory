import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import texttranslationjobproperties as shared_texttranslationjobproperties


@dataclass_json
@dataclasses.dataclass
class ListTextTranslationJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    text_translation_job_properties_list: Optional[list[shared_texttranslationjobproperties.TextTranslationJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextTranslationJobPropertiesList') }})
    

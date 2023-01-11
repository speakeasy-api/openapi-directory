import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locale_enum as shared_locale_enum


@dataclass_json
@dataclasses.dataclass
class GetExclusionsPreviewRequest:
    assessment_template_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateArn') }})
    preview_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewToken') }})
    locale: Optional[shared_locale_enum.LocaleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

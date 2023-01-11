import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentredaction as shared_contentredaction
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import vocabularyfiltermethod_enum as shared_vocabularyfiltermethod_enum


@dataclass_json
@dataclasses.dataclass
class CallAnalyticsJobSettings:
    r"""CallAnalyticsJobSettings
    Provides optional settings for the <code>CallAnalyticsJob</code> operation. 
    """
    
    content_redaction: Optional[shared_contentredaction.ContentRedaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    language_model_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageModelName') }})
    language_options: Optional[list[shared_languagecode_enum.LanguageCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    vocabulary_filter_method: Optional[shared_vocabularyfiltermethod_enum.VocabularyFilterMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterMethod') }})
    vocabulary_filter_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterName') }})
    vocabulary_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import gender_enum as shared_gender_enum
from ..shared import voiceid_enum as shared_voiceid_enum
from ..shared import engine_enum as shared_engine_enum


@dataclass_json
@dataclasses.dataclass
class Voice:
    r"""Voice
    Description of the voice.
    """
    
    additional_language_codes: Optional[list[shared_languagecode_enum.LanguageCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalLanguageCodes') }})
    gender: Optional[shared_gender_enum.GenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    id: Optional[shared_voiceid_enum.VoiceIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    supported_engines: Optional[list[shared_engine_enum.EngineEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedEngines') }})
    

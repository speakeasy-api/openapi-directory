import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obfuscationsettingtype_enum as shared_obfuscationsettingtype_enum


@dataclass_json
@dataclasses.dataclass
class ObfuscationSetting:
    r"""ObfuscationSetting
    Determines whether Amazon Lex obscures slot values in conversation logs. 
    """
    
    obfuscation_setting_type: shared_obfuscationsettingtype_enum.ObfuscationSettingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSettingType') }})
    

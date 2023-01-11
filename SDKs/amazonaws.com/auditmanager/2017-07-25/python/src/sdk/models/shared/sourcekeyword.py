import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keywordinputtype_enum as shared_keywordinputtype_enum


@dataclass_json
@dataclasses.dataclass
class SourceKeyword:
    r"""SourceKeyword
     The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. 
    """
    
    keyword_input_type: Optional[shared_keywordinputtype_enum.KeywordInputTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordInputType') }})
    keyword_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordValue') }})
    

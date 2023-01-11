import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prefixformat_enum as shared_prefixformat_enum
from ..shared import prefixtype_enum as shared_prefixtype_enum


@dataclass_json
@dataclasses.dataclass
class PrefixConfig:
    r"""PrefixConfig
     Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
    """
    
    prefix_format: Optional[shared_prefixformat_enum.PrefixFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixFormat') }})
    prefix_type: Optional[shared_prefixtype_enum.PrefixTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixType') }})
    

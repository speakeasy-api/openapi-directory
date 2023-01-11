import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loacontenttype_enum as shared_loacontenttype_enum


@dataclass_json
@dataclasses.dataclass
class Loa:
    r"""Loa
    Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
    """
    
    loa_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaContent') }})
    loa_content_type: Optional[shared_loacontenttype_enum.LoaContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaContentType') }})
    

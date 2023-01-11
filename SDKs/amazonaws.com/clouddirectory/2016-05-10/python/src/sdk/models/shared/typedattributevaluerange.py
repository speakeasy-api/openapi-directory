import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rangemode_enum as shared_rangemode_enum
from ..shared import typedattributevalue as shared_typedattributevalue


@dataclass_json
@dataclasses.dataclass
class TypedAttributeValueRange:
    r"""TypedAttributeValueRange
    A range of attribute values. For more information, see <a href=\"http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters\">Range Filters</a>.
    """
    
    end_mode: shared_rangemode_enum.RangeModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndMode') }})
    start_mode: shared_rangemode_enum.RangeModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartMode') }})
    end_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndValue') }})
    start_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartValue') }})
    

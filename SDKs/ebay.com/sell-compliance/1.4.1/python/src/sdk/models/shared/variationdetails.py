import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namevaluelist as shared_namevaluelist


@dataclass_json
@dataclasses.dataclass
class VariationDetails:
    r"""VariationDetails
    This type is used to identify the product variation that has the listing violation.
    """
    
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    variation_aspects: Optional[list[shared_namevaluelist.NameValueList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variationAspects') }})
    

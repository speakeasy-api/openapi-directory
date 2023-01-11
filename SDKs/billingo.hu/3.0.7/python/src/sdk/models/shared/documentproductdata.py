import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unitpricetype_enum as shared_unitpricetype_enum
from ..shared import vat_enum as shared_vat_enum


@dataclass_json
@dataclasses.dataclass
class DocumentProductData:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    unit_price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    unit_price_type: shared_unitpricetype_enum.UnitPriceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price_type') }})
    vat: shared_vat_enum.VatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

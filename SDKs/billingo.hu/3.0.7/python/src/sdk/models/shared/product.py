import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import vat_enum as shared_vat_enum


@dataclass_json
@dataclasses.dataclass
class Product:
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    vat: shared_vat_enum.VatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    general_ledger_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_ledger_number') }})
    general_ledger_taxcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_ledger_taxcode') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    net_unit_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_unit_price') }})
    

@dataclass_json
@dataclasses.dataclass
class ProductInput:
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    vat: shared_vat_enum.VatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    general_ledger_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_ledger_number') }})
    general_ledger_taxcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general_ledger_taxcode') }})
    net_unit_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_unit_price') }})
    

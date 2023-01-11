import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrderInvoiceGeneralSettings:
    r"""OrderInvoiceGeneralSettings
    Order Invoice General Settings
    """
    
    culture_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cultureName') }})
    invoice_prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicePrefix') }})
    invoice_starting_sequence_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceStartingSequenceNumber') }})
    product_vat_percent: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productVATPercent') }})
    shipping_vat_percent: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingVATPercent') }})
    

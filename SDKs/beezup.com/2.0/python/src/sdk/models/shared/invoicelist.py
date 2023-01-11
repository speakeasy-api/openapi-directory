import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoice as shared_invoice
from ..shared import invoicelistlinks as shared_invoicelistlinks


@dataclass_json
@dataclasses.dataclass
class InvoiceList:
    invoices: list[shared_invoice.Invoice] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    links: shared_invoicelistlinks.InvoiceListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getinvoiceslink as shared_links_getinvoiceslink


@dataclass_json
@dataclasses.dataclass
class InvoiceListLinks:
    self: shared_links_getinvoiceslink.LinksGetInvoicesLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

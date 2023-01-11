import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getorderexportationslink as shared_links_getorderexportationslink


@dataclass_json
@dataclasses.dataclass
class OrderExportationsLinks:
    self: shared_links_getorderexportationslink.LinksGetOrderExportationsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

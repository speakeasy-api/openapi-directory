import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GeneralSettings:
    r"""GeneralSettings
    Represents the general settings of your channel catalog
    """
    
    accept_to_publish_info: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptToPublishInfo') }})
    active_beez_up_tracking: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeBeezUPTracking') }})
    do_not_export_out_of_stock_products: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotExportOutOfStockProducts') }})
    

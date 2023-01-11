import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimisebyproductlink as shared_links_optimisebyproductlink


@dataclass_json
@dataclasses.dataclass
class ReportByProductAllChannelsLinks:
    disable_product_for_all_channels: shared_links_optimisebyproductlink.LinksOptimiseByProductLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProductForAllChannels') }})
    enable_product_for_all_channels: shared_links_optimisebyproductlink.LinksOptimiseByProductLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableProductForAllChannels') }})
    

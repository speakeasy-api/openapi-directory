import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_channelbasicinfo as shared_beezup_common_channelbasicinfo


@dataclass_json
@dataclasses.dataclass
class CopyOptimisationResponse:
    r"""CopyOptimisationResponse
    Products optimisatisation copied
    """
    
    catalog_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogProductCount') }})
    channel: shared_beezup_common_channelbasicinfo.BeezUpCommonChannelBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    enabled_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledProductCount') }})
    

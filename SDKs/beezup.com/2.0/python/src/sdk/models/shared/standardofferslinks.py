import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getstandardofferslink as shared_links_getstandardofferslink


@dataclass_json
@dataclasses.dataclass
class StandardOffersLinks:
    self: shared_links_getstandardofferslink.LinksGetStandardOffersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

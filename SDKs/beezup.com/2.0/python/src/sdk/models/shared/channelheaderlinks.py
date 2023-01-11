import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getchannelinfolink as shared_links_getchannelinfolink


@dataclass_json
@dataclasses.dataclass
class ChannelHeaderLinks:
    r"""ChannelHeaderLinks
    The links related to an available channel
    """
    
    self: Optional[shared_links_getchannelinfolink.LinksGetChannelInfoLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

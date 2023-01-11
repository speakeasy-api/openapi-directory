import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getchannelslink as shared_links_getchannelslink
from ..shared import publicchannelinfo as shared_publicchannelinfo


@dataclass_json
@dataclasses.dataclass
class PublicChannelInfoListLinks:
    self: Optional[shared_links_getchannelslink.LinksGetChannelsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class PublicChannelInfoList:
    channels: Optional[list[shared_publicchannelinfo.PublicChannelInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    links: Optional[PublicChannelInfoListLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

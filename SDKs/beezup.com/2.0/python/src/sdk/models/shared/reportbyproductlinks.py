import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbyproductallchannelslinks as shared_reportbyproductallchannelslinks
from ..shared import reportbyproductonechannellinks as shared_reportbyproductonechannellinks


@dataclass_json
@dataclasses.dataclass
class ReportByProductLinks:
    r"""ReportByProductLinks
    Depending if the report concerned multiple channels or one channel.
    """
    
    all_channels_links: Optional[shared_reportbyproductallchannelslinks.ReportByProductAllChannelsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allChannelsLinks') }})
    one_channel_links: Optional[shared_reportbyproductonechannellinks.ReportByProductOneChannelLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneChannelLinks') }})
    

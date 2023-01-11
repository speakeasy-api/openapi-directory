import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getpubliclistofvalueslink as shared_links_getpubliclistofvalueslink
from ..shared import links_getchannelsindexlink as shared_links_getchannelsindexlink
from ..shared import links_getchannelslink as shared_links_getchannelslink


@dataclass_json
@dataclasses.dataclass
class PublicChannelIndexLinks:
    channel_country_lov: Optional[shared_links_getpubliclistofvalueslink.LinksGetPublicListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCountryLov') }})
    channel_type_lov: Optional[shared_links_getpubliclistofvalueslink.LinksGetPublicListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTypeLov') }})
    sector_lov: Optional[shared_links_getpubliclistofvalueslink.LinksGetPublicListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectorLov') }})
    self: Optional[shared_links_getchannelsindexlink.LinksGetChannelsIndexLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class PublicChannelIndex:
    channels: Optional[dict[str, shared_links_getchannelslink.LinksGetChannelsLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    links: Optional[PublicChannelIndexLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

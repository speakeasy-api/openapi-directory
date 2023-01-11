import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_saveprofilepictureinfolink as shared_links_saveprofilepictureinfolink
from ..shared import links_getprofilepictureinfolink as shared_links_getprofilepictureinfolink


@dataclass_json
@dataclasses.dataclass
class ProfilePictureInfoResponseLinks:
    save: shared_links_saveprofilepictureinfolink.LinksSaveProfilePictureInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    self: shared_links_getprofilepictureinfolink.LinksGetProfilePictureInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilepictureinforesponselinks as shared_profilepictureinforesponselinks
from ..shared import profilepictureinfowithdefault as shared_profilepictureinfowithdefault


@dataclass_json
@dataclasses.dataclass
class ProfilePictureInfoResponse:
    links: shared_profilepictureinforesponselinks.ProfilePictureInfoResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    profile_picture_info: shared_profilepictureinfowithdefault.ProfilePictureInfoWithDefault = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePictureInfo') }})
    

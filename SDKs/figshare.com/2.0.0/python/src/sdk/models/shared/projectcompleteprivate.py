import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collaborator as shared_collaborator
from ..shared import fundinginformation as shared_fundinginformation

class ProjectCompletePrivateRoleEnum(str, Enum):
    OWNER = "Owner"
    COLLABORATOR = "Collaborator"
    VIEWER = "Viewer"

class ProjectCompletePrivateStorageEnum(str, Enum):
    INDIVIDUAL = "individual"
    GROUP = "group"


@dataclass_json
@dataclasses.dataclass
class ProjectCompletePrivate:
    collaborators: Optional[list[shared_collaborator.Collaborator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    figshare_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('figshare_url') }})
    funding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('funding') }})
    funding_list: Optional[list[shared_fundinginformation.FundingInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('funding_list') }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_date') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    role: Optional[ProjectCompletePrivateRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    storage: Optional[ProjectCompletePrivateStorageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    used_quota: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_quota') }})
    used_quota_private: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_quota_private') }})
    used_quota_public: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_quota_public') }})
    

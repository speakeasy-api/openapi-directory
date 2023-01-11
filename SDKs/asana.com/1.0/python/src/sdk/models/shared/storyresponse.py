import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import customfieldcompact as shared_customfieldcompact
from ..shared import taskcompact as shared_taskcompact
from ..shared import like as shared_like
from ..shared import storyresponsedates as shared_storyresponsedates
from ..shared import enumoption as shared_enumoption
from ..shared import sectioncompact as shared_sectioncompact
from ..shared import preview as shared_preview
from ..shared import projectcompact as shared_projectcompact
from ..shared import storycompact as shared_storycompact
from ..shared import tagcompact as shared_tagcompact

class StoryResponseSourceEnum(str, Enum):
    WEB = "web"
    EMAIL = "email"
    MOBILE = "mobile"
    API = "api"
    UNKNOWN = "unknown"

class StoryResponseStickerNameEnum(str, Enum):
    GREEN_CHECKMARK = "green_checkmark"
    PEOPLE_DANCING = "people_dancing"
    DANCING_UNICORN = "dancing_unicorn"
    HEART = "heart"
    PARTY_POPPER = "party_popper"
    PEOPLE_WAVING_FLAGS = "people_waving_flags"
    SPLASHING_NARWHAL = "splashing_narwhal"
    TROPHY = "trophy"
    YETI_RIDING_UNICORN = "yeti_riding_unicorn"
    CELEBRATING_PEOPLE = "celebrating_people"
    DETERMINED_CLIMBERS = "determined_climbers"
    PHOENIX_SPREADING_LOVE = "phoenix_spreading_love"


@dataclass_json
@dataclasses.dataclass
class StoryResponse:
    r"""StoryResponse
    A story represents an activity associated with an object in the Asana system.
    """
    
    assignee: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    custom_field: Optional[shared_customfieldcompact.CustomFieldCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field') }})
    dependency: Optional[shared_taskcompact.TaskCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependency') }})
    duplicate_of: Optional[shared_taskcompact.TaskCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_of') }})
    duplicated_from: Optional[shared_taskcompact.TaskCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicated_from') }})
    follower: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follower') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    hearted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearted') }})
    hearts: Optional[list[shared_like.Like]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearts') }})
    html_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    is_edited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_edited') }})
    is_pinned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pinned') }})
    liked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    likes: Optional[list[shared_like.Like]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    new_approval_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_approval_status') }})
    new_dates: Optional[shared_storyresponsedates.StoryResponseDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_dates') }})
    new_enum_value: Optional[shared_enumoption.EnumOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_enum_value') }})
    new_multi_enum_values: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_multi_enum_values') }})
    new_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_name') }})
    new_number_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_number_value') }})
    new_resource_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_resource_subtype') }})
    new_section: Optional[shared_sectioncompact.SectionCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_section') }})
    new_text_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_text_value') }})
    num_hearts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hearts') }})
    num_likes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_likes') }})
    old_approval_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_approval_status') }})
    old_dates: Optional[shared_storyresponsedates.StoryResponseDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_dates') }})
    old_enum_value: Optional[shared_enumoption.EnumOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_enum_value') }})
    old_multi_enum_values: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_multi_enum_values') }})
    old_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_name') }})
    old_number_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_number_value') }})
    old_resource_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_resource_subtype') }})
    old_section: Optional[shared_sectioncompact.SectionCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_section') }})
    old_text_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_text_value') }})
    previews: Optional[list[shared_preview.Preview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previews') }})
    project: Optional[shared_projectcompact.ProjectCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    source: Optional[StoryResponseSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    sticker_name: Optional[StoryResponseStickerNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticker_name') }})
    story: Optional[shared_storycompact.StoryCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('story') }})
    tag: Optional[shared_tagcompact.TagCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    target: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task: Optional[shared_taskcompact.TaskCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

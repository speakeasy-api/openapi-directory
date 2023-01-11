import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecollaborator as shared_resourcecollaborator
from ..shared import collectionprivacy_enum as shared_collectionprivacy_enum
from ..shared import resourcerights as shared_resourcerights
from ..shared import collectiontype_enum as shared_collectiontype_enum
from ..shared import userpublicsummary as shared_userpublicsummary


@dataclass_json
@dataclasses.dataclass
class CollectionCapabilities:
    r"""CollectionCapabilities
    Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
    """
    
    can_add_scores: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAddScores') }})
    can_delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDelete') }})
    can_delete_scores: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteScores') }})
    can_edit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canEdit') }})
    can_share: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canShare') }})
    

@dataclass_json
@dataclasses.dataclass
class Collection:
    r"""Collection
    Collection of scores
    """
    
    app: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    capabilities: Optional[CollectionCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    collaborators: Optional[list[shared_resourcecollaborator.ResourceCollaborator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    collections: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlUrl') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    privacy: Optional[shared_collectionprivacy_enum.CollectionPrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    rights: Optional[shared_resourcerights.ResourceRights] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharingKey') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[shared_collectiontype_enum.CollectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[shared_userpublicsummary.UserPublicSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

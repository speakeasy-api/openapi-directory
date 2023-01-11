import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecollaborator as shared_resourcecollaborator
from ..shared import scorecommentscounts as shared_scorecommentscounts
from ..shared import scorecreationtype_enum as shared_scorecreationtype_enum
from ..shared import scorelicense_enum as shared_scorelicense_enum
from ..shared import scorelikescounts as shared_scorelikescounts
from ..shared import scoreplayscounts as shared_scoreplayscounts
from ..shared import scoreprivacy_enum as shared_scoreprivacy_enum
from ..shared import resourcerights as shared_resourcerights
from ..shared import userpublicsummary as shared_userpublicsummary
from ..shared import scoreviewscounts as shared_scoreviewscounts


@dataclass_json
@dataclasses.dataclass
class ScoreDetails:
    r"""ScoreDetails
    A summary of the score details
    """
    
    arranger: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arranger') }})
    collaborators: Optional[list[shared_resourcecollaborator.ResourceCollaborator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    collections: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    comments: Optional[shared_scorecommentscounts.ScoreCommentsCounts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    composer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('composer') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_type: Optional[shared_scorecreationtype_enum.ScoreCreationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationTime') }})
    google_drive_file_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDriveFileId') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlUrl') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instruments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruments') }})
    license: Optional[shared_scorelicense_enum.ScoreLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    license_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseText') }})
    likes: Optional[shared_scorelikescounts.ScoreLikesCounts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    lyricist: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyricist') }})
    main_tempo_qpm: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainTempoQpm') }})
    modification_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modificationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_measures: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberMeasures') }})
    organization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    parent_score: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentScore') }})
    plays: Optional[shared_scoreplayscounts.ScorePlaysCounts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    privacy: Optional[shared_scoreprivacy_enum.ScorePrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    publication_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rights: Optional[shared_resourcerights.ResourceRights] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    samples: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples') }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharingKey') }})
    subtitle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user: Optional[shared_userpublicsummary.UserPublicSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    views: Optional[shared_scoreviewscounts.ScoreViewsCounts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    

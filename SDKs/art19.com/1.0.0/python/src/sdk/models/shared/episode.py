import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier

class EpisodeAttributesItunesTypeEnum(str, Enum):
    FULL = "full"
    BONUS = "bonus"
    TRAILER = "trailer"

class EpisodeAttributesPremiumStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    FORCE_ACTIVE = "force-active"
    FORCE_INACTIVE = "force-inactive"

class EpisodeAttributesStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class EpisodeAttributes:
    allow_user_comments: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_user_comments') }})
    cascaded_cover_image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cascaded_cover_image_id') }})
    cover_image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_image_id') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_is_html') }})
    description_plain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_plain') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    itunes_type: Optional[EpisodeAttributesItunesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itunes_type') }})
    listen_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_count') }})
    premium_status: Optional[EpisodeAttributesPremiumStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_status') }})
    published: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    release_immediately: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_immediately') }})
    released_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('released_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rss_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rss_guid') }})
    season_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season_id') }})
    series_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series_id') }})
    sort_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_title') }})
    status: Optional[EpisodeAttributesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsCascadedCoverImage:
    r"""EpisodeRelationshipsCascadedCoverImage
    The cover art for this episode. This is the preferred image to use.
    If there is no specific cover image for the episode, the cover of the season or the
    series will be returned, whichever has one defined.
    The `/images` endpoint provides details to the image.
    
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsCoverImage:
    r"""EpisodeRelationshipsCoverImage
    The cover art for this episode, if an episode-specific image has been provided.
    The `/images` endpoint provideds details to the image.
    
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints:
    r"""EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints
    Only visible if the credential has write privileges on the series
    """
    
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode:
    r"""EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode
    Only visible if the credential has write privileges on the series
    """
    
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo:
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode:
    r"""EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode
    Only visible if the credential has write privileges on the series
    """
    
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo:
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class EpisodeRelationships:
    cascaded_cover_image: Optional[EpisodeRelationshipsCascadedCoverImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cascaded_cover_image') }})
    classification_inclusions: Optional[EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification_inclusions') }})
    cover_image: Optional[EpisodeRelationshipsCoverImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_image') }})
    credits: Optional[EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    default_marker_points: Optional[EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_marker_points') }})
    episode_versions: Optional[EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode_versions') }})
    images: Optional[EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    season: Optional[EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    segment_lists: Optional[EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment_lists') }})
    series: Optional[EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    taggings: Optional[EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taggings') }})
    tags: Optional[EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class Episode:
    attributes: Optional[EpisodeAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[EpisodeRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

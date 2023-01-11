import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier

class SeasonAttributesStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class SeasonAttributes:
    cascaded_cover_image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cascaded_cover_image_id') }})
    cover_image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_image_id') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_is_html') }})
    description_plain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_plain') }})
    first_released_episode_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_released_episode_id') }})
    last_released_episode_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_released_episode_id') }})
    season_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season_number') }})
    sort_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_title') }})
    status: Optional[SeasonAttributesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsCascadedCoverImage:
    r"""SeasonRelationshipsCascadedCoverImage
    The cover art for this season. If there is no specific cover for the season,
    the cover image of the series' cover art will be returned.
    The `/images` endpoint provideds details to the image.
    
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsCoverImage:
    r"""SeasonRelationshipsCoverImage
    The cover image for the season
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsFirstReleasedEpisode:
    r"""SeasonRelationshipsFirstReleasedEpisode
    The first released episode within the season
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsLastReleasedEpisode:
    r"""SeasonRelationshipsLastReleasedEpisode
    The most recently released episode within the season
    """
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsTheSeriesTheSeasonBelongsTo:
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationshipsAListOfTagsAssociatedWithTheSeason:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SeasonRelationships:
    cascaded_cover_image: Optional[SeasonRelationshipsCascadedCoverImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cascaded_cover_image') }})
    classification_inclusions: Optional[SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification_inclusions') }})
    cover_image: Optional[SeasonRelationshipsCoverImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_image') }})
    credits: Optional[SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    episodes: Optional[SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    first_released_episode: Optional[SeasonRelationshipsFirstReleasedEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_released_episode') }})
    images: Optional[SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    last_released_episode: Optional[SeasonRelationshipsLastReleasedEpisode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_released_episode') }})
    series: Optional[SeasonRelationshipsTheSeriesTheSeasonBelongsTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    taggings: Optional[SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taggings') }})
    tags: Optional[SeasonRelationshipsAListOfTagsAssociatedWithTheSeason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class Season:
    attributes: Optional[SeasonAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[SeasonRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

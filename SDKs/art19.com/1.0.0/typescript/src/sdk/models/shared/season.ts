import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum SeasonAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class SeasonAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cascaded_cover_image_id" })
  cascadedCoverImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=cover_image_id" })
  coverImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_is_html" })
  descriptionIsHtml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description_plain" })
  descriptionPlain?: string;

  @SpeakeasyMetadata({ data: "json, name=first_released_episode_id" })
  firstReleasedEpisodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_released_episode_id" })
  lastReleasedEpisodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=season_number" })
  seasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=sort_title" })
  sortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SeasonAttributesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


// SeasonRelationshipsCascadedCoverImage
/** 
 * The cover art for this season. If there is no specific cover for the season,
 * the cover image of the series' cover art will be returned.
 * The `/images` endpoint provideds details to the image.
 * 
**/
export class SeasonRelationshipsCascadedCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// SeasonRelationshipsCoverImage
/** 
 * The cover image for the season
**/
export class SeasonRelationshipsCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// SeasonRelationshipsFirstReleasedEpisode
/** 
 * The first released episode within the season
**/
export class SeasonRelationshipsFirstReleasedEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// SeasonRelationshipsLastReleasedEpisode
/** 
 * The most recently released episode within the season
**/
export class SeasonRelationshipsLastReleasedEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeasonRelationshipsTheSeriesTheSeasonBelongsTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeasonRelationshipsAListOfTagsAssociatedWithTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeasonRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cascaded_cover_image" })
  cascadedCoverImage?: SeasonRelationshipsCascadedCoverImage;

  @SpeakeasyMetadata({ data: "json, name=classification_inclusions" })
  classificationInclusions?: SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason;

  @SpeakeasyMetadata({ data: "json, name=cover_image" })
  coverImage?: SeasonRelationshipsCoverImage;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason;

  @SpeakeasyMetadata({ data: "json, name=first_released_episode" })
  firstReleasedEpisode?: SeasonRelationshipsFirstReleasedEpisode;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;

  @SpeakeasyMetadata({ data: "json, name=last_released_episode" })
  lastReleasedEpisode?: SeasonRelationshipsLastReleasedEpisode;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: SeasonRelationshipsTheSeriesTheSeasonBelongsTo;

  @SpeakeasyMetadata({ data: "json, name=taggings" })
  taggings?: SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: SeasonRelationshipsAListOfTagsAssociatedWithTheSeason;
}


export class Season extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: SeasonAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: SeasonRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

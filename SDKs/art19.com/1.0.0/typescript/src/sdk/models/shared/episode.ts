import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum EpisodeAttributesItunesTypeEnum {
    Full = "full",
    Bonus = "bonus",
    Trailer = "trailer"
}

export enum EpisodeAttributesPremiumStatusEnum {
    Active = "active",
    Inactive = "inactive",
    ForceActive = "force-active",
    ForceInactive = "force-inactive"
}

export enum EpisodeAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class EpisodeAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_user_comments" })
  allowUserComments?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=itunes_type" })
  itunesType?: EpisodeAttributesItunesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=listen_count" })
  listenCount?: number;

  @SpeakeasyMetadata({ data: "json, name=premium_status" })
  premiumStatus?: EpisodeAttributesPremiumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=release_immediately" })
  releaseImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=released_at" })
  releasedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=rss_guid" })
  rssGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=season_id" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=series_id" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=sort_title" })
  sortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EpisodeAttributesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


// EpisodeRelationshipsCascadedCoverImage
/** 
 * The cover art for this episode. This is the preferred image to use.
 * If there is no specific cover image for the episode, the cover of the season or the
 * series will be returned, whichever has one defined.
 * The `/images` endpoint provides details to the image.
 * 
**/
export class EpisodeRelationshipsCascadedCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// EpisodeRelationshipsCoverImage
/** 
 * The cover art for this episode, if an episode-specific image has been provided.
 * The `/images` endpoint provideds details to the image.
 * 
**/
export class EpisodeRelationshipsCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints
/** 
 * Only visible if the credential has write privileges on the series
**/
export class EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode
/** 
 * Only visible if the credential has write privileges on the series
**/
export class EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


// EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode
/** 
 * Only visible if the credential has write privileges on the series
**/
export class EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class EpisodeRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cascaded_cover_image" })
  cascadedCoverImage?: EpisodeRelationshipsCascadedCoverImage;

  @SpeakeasyMetadata({ data: "json, name=classification_inclusions" })
  classificationInclusions?: EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode;

  @SpeakeasyMetadata({ data: "json, name=cover_image" })
  coverImage?: EpisodeRelationshipsCoverImage;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode;

  @SpeakeasyMetadata({ data: "json, name=default_marker_points" })
  defaultMarkerPoints?: EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints;

  @SpeakeasyMetadata({ data: "json, name=episode_versions" })
  episodeVersions?: EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo;

  @SpeakeasyMetadata({ data: "json, name=segment_lists" })
  segmentLists?: EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo;

  @SpeakeasyMetadata({ data: "json, name=taggings" })
  taggings?: EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes;
}


export class Episode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: EpisodeAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: EpisodeRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

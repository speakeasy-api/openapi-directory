import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum EpisodeAttributesItunesTypeEnum {
    Full = "full",
    Bonus = "bonus",
    Trailer = "trailer"
}
export declare enum EpisodeAttributesPremiumStatusEnum {
    Active = "active",
    Inactive = "inactive",
    ForceActive = "force-active",
    ForceInactive = "force-inactive"
}
export declare enum EpisodeAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class EpisodeAttributes extends SpeakeasyBase {
    allowUserComments?: boolean;
    cascadedCoverImageId?: string;
    coverImageId?: string;
    createdAt?: Date;
    description?: string;
    descriptionIsHtml?: boolean;
    descriptionPlain?: string;
    fileName?: string;
    itunesType?: EpisodeAttributesItunesTypeEnum;
    listenCount?: number;
    premiumStatus?: EpisodeAttributesPremiumStatusEnum;
    published?: boolean;
    releaseImmediately?: boolean;
    releasedAt?: Date;
    rssGuid?: string;
    seasonId?: string;
    seriesId?: string;
    sortTitle?: string;
    status?: EpisodeAttributesStatusEnum;
    title?: string;
    updatedAt?: Date;
}
/**
 * The cover art for this episode. This is the preferred image to use.
 * If there is no specific cover image for the episode, the cover of the season or the
 * series will be returned, whichever has one defined.
 * The `/images` endpoint provides details to the image.
 *
**/
export declare class EpisodeRelationshipsCascadedCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover art for this episode, if an episode-specific image has been provided.
 * The `/images` endpoint provideds details to the image.
 *
**/
export declare class EpisodeRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * Only visible if the credential has write privileges on the series
**/
export declare class EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * Only visible if the credential has write privileges on the series
**/
export declare class EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
/**
 * Only visible if the credential has write privileges on the series
**/
export declare class EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class EpisodeRelationships extends SpeakeasyBase {
    cascadedCoverImage?: EpisodeRelationshipsCascadedCoverImage;
    classificationInclusions?: EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode;
    coverImage?: EpisodeRelationshipsCoverImage;
    credits?: EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode;
    defaultMarkerPoints?: EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints;
    episodeVersions?: EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode;
    images?: EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
    season?: EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo;
    segmentLists?: EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode;
    series?: EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo;
    taggings?: EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes;
    tags?: EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes;
}
export declare class Episode extends SpeakeasyBase {
    attributes?: EpisodeAttributes;
    id?: string;
    relationships?: EpisodeRelationships;
    type?: string;
}

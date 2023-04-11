import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * The type of the episode according to Apple's type categorization
 */
export declare enum EpisodeAttributesItunesTypeEnum {
    Full = "full",
    Bonus = "bonus",
    Trailer = "trailer"
}
/**
 * The current premium status of the episode
 */
export declare enum EpisodeAttributesPremiumStatusEnum {
    Active = "active",
    Inactive = "inactive",
    ForceActive = "force-active",
    ForceInactive = "force-inactive"
}
/**
 * The status of an episode
 */
export declare enum EpisodeAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class EpisodeAttributes extends SpeakeasyBase {
    /**
     * Only visible to credentials having write privileges for the series.
     *
     * @remarks
     *
     */
    allowUserComments?: boolean;
    /**
     * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
     *
     * @remarks
     * The image ID of the cover art for this episode. This is the preferred image ID to use.
     * If there is no specific cover for the episode, the image ID of the season or the
     * series will be returned, whichever has one defined.
     * The `/images` endpoint provides details to the image.
     *
     */
    cascadedCoverImageId?: string;
    /**
     * This will be replaced by the relationship `cover_image` in a future update.<br/>
     *
     * @remarks
     * The image ID of the cover art for this episode, if an episode-specific image has been provided.
     * The `/images` endpoint provideds details to the image.
     *
     */
    coverImageId?: string;
    createdAt?: Date;
    /**
     * The description of the episode, possibly in HTML format
     */
    description?: string;
    /**
     * Determines whether `description` is in HTML format or plain.
     */
    descriptionIsHtml?: boolean;
    /**
     * The description with all HTML markup removed. If the description does not contain markup,
     *
     * @remarks
     * this is identical to `description`.
     *
     */
    descriptionPlain?: string;
    /**
     * The file name, without extension, to present users when downloading the episode
     */
    fileName?: string;
    /**
     * The type of the episode according to Apple's type categorization
     */
    itunesType?: EpisodeAttributesItunesTypeEnum;
    /**
     * The number of total downloads all time for this episode.
     *
     * @remarks
     * Only visible if the credential has the right privilege on the series.
     *
     */
    listenCount?: number;
    /**
     * The current premium status of the episode
     */
    premiumStatus?: EpisodeAttributesPremiumStatusEnum;
    /**
     * If `true`, the episode will be available for download and included in the feed as soon as its
     *
     * @remarks
     * release time is reached, provided it has a valid media file, and `release_end_at` is in the future (if applicable).
     *
     */
    published?: boolean;
    /**
     * The date and time when an episode will no longer be included in the feed, or available for download.
     *
     * @remarks
     * `Published` will remain `true` unless the episode is manually unpublished.
     *
     */
    releaseEndAt?: Date;
    /**
     * If `true`, the episode's release time is set in a way it is considered released right away.
     *
     * @remarks
     * Only visible if the credential has write privileges on the series.
     *
     */
    releaseImmediately?: boolean;
    /**
     * The date and time when an episode will be released. It will be available for download and included
     *
     * @remarks
     * in the feed if this time is reached, `published` is set to `true`, and the episode has a media file.
     *
     */
    releasedAt?: Date;
    /**
     * A globally unique identifier describing the episode. This ID is commonly used by podcast applications
     *
     * @remarks
     * to determine whether an episode has already been downloaded or not.
     *
     */
    rssGuid?: string;
    /**
     * Use the relationship `season` instead.<br />
     *
     * @remarks
     * The ID of the season an episode belongs to. This can be `null`. A series can have episodes with and
     * without seasons at the same time.
     *
     */
    seasonId?: string;
    /**
     * Use the relationship `series` instead.<br />
     *
     * @remarks
     * The ID of the series an episode belongs to.
     *
     */
    seriesId?: string;
    /**
     * The title of the episode modified for sorting. This converts all characters to
     *
     * @remarks
     * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
     *
     */
    sortTitle?: string;
    /**
     * The status of an episode
     */
    status?: EpisodeAttributesStatusEnum;
    /**
     * The title of the episode
     */
    title?: string;
    updatedAt?: Date;
}
/**
 * The cover art for this episode. This is the preferred image to use.
 *
 * @remarks
 * If there is no specific cover image for the episode, the cover of the season or the
 * series will be returned, whichever has one defined.
 * The `/images` endpoint provides details to the image.
 *
 */
export declare class EpisodeRelationshipsCascadedCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover art for this episode, if an episode-specific image has been provided.
 *
 * @remarks
 * The `/images` endpoint provideds details to the image.
 *
 */
export declare class EpisodeRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * Only visible if the credential has write privileges on the series
 */
export declare class EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * Only visible if the credential has write privileges on the series
 */
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
 */
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
    /**
     * The cover art for this episode. This is the preferred image to use.
     *
     * @remarks
     * If there is no specific cover image for the episode, the cover of the season or the
     * series will be returned, whichever has one defined.
     * The `/images` endpoint provides details to the image.
     *
     */
    cascadedCoverImage?: EpisodeRelationshipsCascadedCoverImage;
    classificationInclusions?: EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode;
    /**
     * The cover art for this episode, if an episode-specific image has been provided.
     *
     * @remarks
     * The `/images` endpoint provideds details to the image.
     *
     */
    coverImage?: EpisodeRelationshipsCoverImage;
    credits?: EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode;
    /**
     * Only visible if the credential has write privileges on the series
     */
    defaultMarkerPoints?: EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints;
    /**
     * Only visible if the credential has write privileges on the series
     */
    episodeVersions?: EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode;
    images?: EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
    season?: EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo;
    /**
     * Only visible if the credential has write privileges on the series
     */
    segmentLists?: EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode;
    series?: EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo;
    taggings?: EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes;
    tags?: EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes;
}
export declare class Episode extends SpeakeasyBase {
    attributes?: EpisodeAttributes;
    id?: string;
    relationships?: EpisodeRelationships;
    /**
     * The type of resource. This is always `episodes`
     */
    type?: string;
}

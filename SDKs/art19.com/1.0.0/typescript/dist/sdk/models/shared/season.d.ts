import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * The current status of the season
 */
export declare enum SeasonAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class SeasonAttributes extends SpeakeasyBase {
    /**
     * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
     *
     * @remarks
     * The image ID of the cover art for this season. If there is no specific cover for the season,
     * the image ID of the series' cover art will be returned.
     * The `/images` endpoint provideds details to the image.
     *
     */
    cascadedCoverImageId?: string;
    /**
     * This will be replaced by the relationship `cover_image` in a future update.<br/>
     *
     * @remarks
     * The image ID of the cover art for this season. The `/images` endpoint provideds details to the image.
     *
     */
    coverImageId?: string;
    createdAt?: Date;
    /**
     * The description of the season eventually in HTML format
     */
    description?: string;
    /**
     * Determines whether `description` is in HTML format or plain.
     */
    descriptionIsHtml?: boolean;
    /**
     * The description with all HTML markup removed. If the description does not contain markup
     *
     * @remarks
     * this is identitcal to `description`.
     *
     */
    descriptionPlain?: string;
    /**
     * This will be replaced by the relationship `first_released_episode` in a future update.<br/>
     *
     * @remarks
     * The ID of the first released episode within the season
     *
     */
    firstReleasedEpisodeId?: string;
    /**
     * This will be replaced by the relationship `last_released_episode` in a future update.<br/>
     *
     * @remarks
     * The ID of the most recently released episode within the season
     *
     */
    lastReleasedEpisodeId?: string;
    /**
     * The number of the season. This could be `null` as well.
     */
    seasonNumber?: number;
    /**
     * The title of the season modified for sorting. This converts all characters to
     *
     * @remarks
     * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
     *
     */
    sortTitle?: string;
    /**
     * The current status of the season
     */
    status?: SeasonAttributesStatusEnum;
    /**
     * The title of the season
     */
    title?: string;
    updatedAt?: Date;
}
/**
 * The cover art for this season. If there is no specific cover for the season,
 *
 * @remarks
 * the cover image of the series' cover art will be returned.
 * The `/images` endpoint provideds details to the image.
 *
 */
export declare class SeasonRelationshipsCascadedCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover image for the season
 */
export declare class SeasonRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The first released episode within the season
 */
export declare class SeasonRelationshipsFirstReleasedEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The most recently released episode within the season
 */
export declare class SeasonRelationshipsLastReleasedEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsTheSeriesTheSeasonBelongsTo extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeasonRelationshipsAListOfTagsAssociatedWithTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeasonRelationships extends SpeakeasyBase {
    /**
     * The cover art for this season. If there is no specific cover for the season,
     *
     * @remarks
     * the cover image of the series' cover art will be returned.
     * The `/images` endpoint provideds details to the image.
     *
     */
    cascadedCoverImage?: SeasonRelationshipsCascadedCoverImage;
    classificationInclusions?: SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason;
    /**
     * The cover image for the season
     */
    coverImage?: SeasonRelationshipsCoverImage;
    credits?: SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason;
    episodes?: SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason;
    /**
     * The first released episode within the season
     */
    firstReleasedEpisode?: SeasonRelationshipsFirstReleasedEpisode;
    images?: SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
    /**
     * The most recently released episode within the season
     */
    lastReleasedEpisode?: SeasonRelationshipsLastReleasedEpisode;
    series?: SeasonRelationshipsTheSeriesTheSeasonBelongsTo;
    taggings?: SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason;
    tags?: SeasonRelationshipsAListOfTagsAssociatedWithTheSeason;
}
export declare class Season extends SpeakeasyBase {
    attributes?: SeasonAttributes;
    id?: string;
    relationships?: SeasonRelationships;
    /**
     * The type of resource. This is always `seasons`
     */
    type?: string;
}

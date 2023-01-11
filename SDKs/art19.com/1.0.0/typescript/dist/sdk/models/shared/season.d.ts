import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum SeasonAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class SeasonAttributes extends SpeakeasyBase {
    cascadedCoverImageId?: string;
    coverImageId?: string;
    createdAt?: Date;
    description?: string;
    descriptionIsHtml?: boolean;
    descriptionPlain?: string;
    firstReleasedEpisodeId?: string;
    lastReleasedEpisodeId?: string;
    seasonNumber?: number;
    sortTitle?: string;
    status?: SeasonAttributesStatusEnum;
    title?: string;
    updatedAt?: Date;
}
/**
 * The cover art for this season. If there is no specific cover for the season,
 * the cover image of the series' cover art will be returned.
 * The `/images` endpoint provideds details to the image.
 *
**/
export declare class SeasonRelationshipsCascadedCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover image for the season
**/
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
**/
export declare class SeasonRelationshipsFirstReleasedEpisode extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The most recently released episode within the season
**/
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
    cascadedCoverImage?: SeasonRelationshipsCascadedCoverImage;
    classificationInclusions?: SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason;
    coverImage?: SeasonRelationshipsCoverImage;
    credits?: SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason;
    episodes?: SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason;
    firstReleasedEpisode?: SeasonRelationshipsFirstReleasedEpisode;
    images?: SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
    lastReleasedEpisode?: SeasonRelationshipsLastReleasedEpisode;
    series?: SeasonRelationshipsTheSeriesTheSeasonBelongsTo;
    taggings?: SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason;
    tags?: SeasonRelationshipsAListOfTagsAssociatedWithTheSeason;
}
export declare class Season extends SpeakeasyBase {
    attributes?: SeasonAttributes;
    id?: string;
    relationships?: SeasonRelationships;
    type?: string;
}

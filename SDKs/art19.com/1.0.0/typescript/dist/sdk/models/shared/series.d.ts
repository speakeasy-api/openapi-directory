import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum SeriesAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare enum SeriesAttributesTypeEnum {
    Series = "Series"
}
export declare class SeriesAttributes extends SpeakeasyBase {
    amazonSubscriptionUrl?: string;
    castboxSubscriptionUrl?: string;
    coverImageId?: string;
    createdAt?: Date;
    description?: string;
    descriptionIsHtml?: boolean;
    descriptionPlain?: string;
    facebookUrl?: string;
    googleSubscriptionUrl?: string;
    iheartSubscriptionUrl?: string;
    instagramUrl?: string;
    itunesSubscriptionBadgeEnabled?: boolean;
    itunesSubscriptionUrl?: string;
    linkedinUrl?: string;
    pocketCastsSubscriptionUrl?: string;
    podcastSubscriptionUrl?: string;
    publicPageEnabled?: boolean;
    publicTitle?: string;
    radioPublicSubscriptionUrl?: string;
    rssAuthor?: string;
    rssCopyright?: string;
    rssEmail?: string;
    rssOwner?: string;
    slug?: string;
    sortTitle?: string;
    spotifySubscriptionBadgeEnabled?: boolean;
    spotifySubscriptionUrl?: string;
    status?: SeriesAttributesStatusEnum;
    stitcherSubscriptionBadgeEnabled?: boolean;
    stitcherSubscriptionUrl?: string;
    title?: string;
    tumblrUrl?: string;
    tuneInSubscriptionUrl?: string;
    twitterUrl?: string;
    type?: SeriesAttributesTypeEnum;
    updatedAt?: Date;
    websiteUrl?: string;
}
export declare class SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover image for the series
**/
export declare class SeriesRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationshipsTheCoverImageForTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationshipsTheNetworkTheSeriesBelongsTo extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class SeriesRelationshipsAListOfSeasonsInTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationshipsAListOfTagsAssociatedWithTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class SeriesRelationships extends SpeakeasyBase {
    classificationInclusions?: SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries;
    coverImage?: SeriesRelationshipsCoverImage;
    credits?: SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries;
    episodes?: SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile;
    images?: SeriesRelationshipsTheCoverImageForTheSeries;
    network?: SeriesRelationshipsTheNetworkTheSeriesBelongsTo;
    seasons?: SeriesRelationshipsAListOfSeasonsInTheSeries;
    taggings?: SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries;
    tags?: SeriesRelationshipsAListOfTagsAssociatedWithTheSeries;
}
export declare class Series extends SpeakeasyBase {
    attributes?: SeriesAttributes;
    id?: string;
    relationships?: SeriesRelationships;
    type?: string;
}

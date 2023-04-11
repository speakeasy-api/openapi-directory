import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * The status of the series
 */
export declare enum SeriesAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * The type of the series
 */
export declare enum SeriesAttributesTypeEnum {
    Series = "Series"
}
export declare class SeriesAttributes extends SpeakeasyBase {
    /**
     * The Amazon Music subscription URL
     */
    amazonSubscriptionUrl?: string;
    /**
     * The CastBox subscription URL
     */
    castboxSubscriptionUrl?: string;
    /**
     * This will be replaced by the relationship `cover_image` in a future update.<br/>
     *
     * @remarks
     * The image ID of the cover art for this series. The `/images` endpoint provideds details to the image.
     *
     */
    coverImageId?: string;
    createdAt?: Date;
    /**
     * The description of the series eventually in HTML format
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
     * The URL of the series on Facebook
     */
    facebookUrl?: string;
    /**
     * The Google subscription URL
     */
    googleSubscriptionUrl?: string;
    /**
     * The iHeartRadio subscription URL
     */
    iheartSubscriptionUrl?: string;
    /**
     * The URL of the series on Instagram
     */
    instagramUrl?: string;
    /**
     * If `null` or `true`, the ART19 web player will render an iTunes subscription badge
     */
    itunesSubscriptionBadgeEnabled?: boolean;
    /**
     * The Apple iTunes subscription URL
     */
    itunesSubscriptionUrl?: string;
    /**
     * The URL of the series on LinkedIn
     */
    linkedinUrl?: string;
    /**
     * The Pocket Casts subscription URL
     */
    pocketCastsSubscriptionUrl?: string;
    /**
     * The URL of the RSS feed
     */
    podcastSubscriptionUrl?: string;
    /**
     * If this is `true`, a public web page for this series is available under
     *
     * @remarks
     * `https://art19.com/shows/{slug}`, where `slug` is the value of the corresponding attribute.
     * This public page provides details about the series as well as descriptive links to all its
     * episodes. If this is `false`, no such public page is available.
     *
     */
    publicPageEnabled?: boolean;
    /**
     * If present, this is the preferred title for the series in the RSS Feed
     */
    publicTitle?: string;
    /**
     * The RadioPublic subscription URL
     */
    radioPublicSubscriptionUrl?: string;
    /**
     * The author responsible for the RSS feed
     */
    rssAuthor?: string;
    /**
     * The copyright disclaimer for the contents of the show, appearing after a © symbol, e.g. `2020 ART19, Inc.`
     */
    rssCopyright?: string;
    /**
     * The pubic point of contact for the show
     */
    rssEmail?: string;
    /**
     * The name of the contact for the show
     */
    rssOwner?: string;
    /**
     * This slug is unique over all series and networks system wide and is used to access the series' feed
     *
     * @remarks
     * as well as its eventually enabled public page on ART19.
     *
     */
    slug?: string;
    /**
     * The title of the series modified for sorting. This converts all characters to
     *
     * @remarks
     * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
     *
     */
    sortTitle?: string;
    /**
     * If `null` or `true`, the ART19 web player will render a Spotify subscription badge
     */
    spotifySubscriptionBadgeEnabled?: boolean;
    /**
     * The Spotify subscription URL
     */
    spotifySubscriptionUrl?: string;
    /**
     * The status of the series
     */
    status?: SeriesAttributesStatusEnum;
    /**
     * If `null` or `true`, the ART19 web player will render a Stitcher subscription badge
     */
    stitcherSubscriptionBadgeEnabled?: boolean;
    /**
     * The Stitcher subscription URL
     */
    stitcherSubscriptionUrl?: string;
    /**
     * The title of the series
     */
    title?: string;
    /**
     * The URL of the series on Tumblr
     */
    tumblrUrl?: string;
    /**
     * The TuneIn subscription URL
     */
    tuneInSubscriptionUrl?: string;
    /**
     * The URL of the series on Twitter
     */
    twitterUrl?: string;
    /**
     * The type of the series
     */
    type?: SeriesAttributesTypeEnum;
    updatedAt?: Date;
    /**
     * The custom website URL for the series
     */
    websiteUrl?: string;
}
export declare class SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The cover image for the series
 */
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
    /**
     * The cover image for the series
     */
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
    /**
     * The type of resource. This is always `series`
     */
    type?: string;
}

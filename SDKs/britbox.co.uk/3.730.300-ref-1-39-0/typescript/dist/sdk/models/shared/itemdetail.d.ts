import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Credit } from "./credit";
import { ItemCustomMetadata } from "./itemcustommetadata";
import { ItemList } from "./itemlist";
import { ItemSummary } from "./itemsummary";
import { Offer } from "./offer";
import { Theme } from "./theme";
/**
 * The type of item
 */
export declare enum ItemDetailTypeEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
/**
 * The item requested
 */
export declare class ItemDetail extends SpeakeasyBase {
    /**
     * Advisory text about this item, related to the classification
     */
    advisoryText?: string;
    /**
     * The number of available episodes in the season, if the item is a season.
     */
    availableEpisodeCount?: number;
    /**
     * The number of available seasons in the show, if the item is a show.
     */
    availableSeasonCount?: number;
    /**
     * The average user rating.
     *
     * @remarks
     * When based on user ratings from our system this will be out of 10.
     *
     */
    averageUserRating?: number;
    /**
     * The badge this item has.
     */
    badge?: string;
    /**
     * The channel short code, if the item is a channel.
     */
    channelShortCode?: string;
    classification?: ClassificationSummary;
    /**
     * A contextually relative title to display after a parent title.
     *
     * @remarks
     * Mostly applicable to Season, Episode and Trailer.
     *
     */
    contextualTitle?: string;
    /**
     * Copyright information about this item
     */
    copyright?: string;
    /**
     * A list of credits associated with this item.
     */
    credits?: Credit[];
    /**
     * A map of custom fields defined by a curator for an item.
     */
    customFields?: Record<string, any>;
    /**
     * A custom identifier for this item.
     *
     * @remarks
     * For example the id for this item under a different content system.
     *
     */
    customId?: string;
    /**
     * An ordered list of custom name-value-pair item metadata.
     *
     * @remarks
     *
     * Usually displayed on an item detail page.
     *
     */
    customMetadata?: ItemCustomMetadata[];
    /**
     * The description of this item.
     */
    description?: string;
    /**
     * The distributor of this item.
     */
    distributor?: string;
    /**
     * The duration of the media in seconds.
     */
    duration?: number;
    /**
     * The number of episodes in the season, if the item is a season.
     */
    episodeCount?: number;
    /**
     * The full name of an episode.
     */
    episodeName?: string;
    /**
     * The number of an episode, if the item is an episode.
     */
    episodeNumber?: number;
    /**
     * A pageable list of items.
     */
    episodes?: ItemList;
    /**
     * The optional date of an event.
     *
     * @remarks
     * Specific to a Program item type.
     *
     */
    eventDate?: Date;
    /**
     * An array of genre paths mapping to the values within the `genres` array from ItemSummary.
     *
     * @remarks
     *
     */
    genrePaths?: string[];
    /**
     * The array of genres this item belongs to.
     */
    genres?: string[];
    /**
     * Whether closed captioning is available.
     */
    hasClosedCaptions?: boolean;
    /**
     * Unique identifier for an Item
     */
    id: string;
    images?: Record<string, string>;
    /**
     * The optional location (e.g. city) of an event.
     *
     * @remarks
     * Specific to a Program item type.
     *
     */
    location?: string;
    /**
     * The array of available offers for this item.
     */
    offers?: Offer[];
    /**
     * The path to the detail page of this item. Can be used to load the item detail page via the /page endpoint.
     */
    path: string;
    /**
     * The year this item was released
     */
    releaseYear?: number;
    /**
     * The scopes for this item
     */
    scopes?: string[];
    season?: ItemDetail;
    /**
     * The identifier of the season this item belongs to, if the item is an episode.
     */
    seasonId?: string;
    /**
     * The number of a season, if the item is a season.
     */
    seasonNumber?: number;
    /**
     * A pageable list of items.
     */
    seasons?: ItemList;
    /**
     * A truncated description of the item
     */
    shortDescription?: string;
    show?: ItemDetail;
    /**
     * The identifier of the show this item belongs to, if the item is a season or episode.
     */
    showId?: string;
    showTitle?: string;
    /**
     * Subtype of the item. Mainly used to identify different types when `type`
     *
     * @remarks
     * is `customAsset`
     *
     */
    subtype?: string;
    /**
     * The tagline of the item
     */
    tagline?: string;
    /**
     * Gets themes associated with the item
     */
    themes?: Theme[];
    /**
     * The display title of the item.
     */
    title: string;
    /**
     * The total number of users who have rated this item.
     */
    totalUserRatings?: number;
    /**
     * A list of trailers associated with this item.
     */
    trailers?: ItemSummary[];
    /**
     * The type of item
     */
    type: ItemDetailTypeEnum;
    /**
     * The optional venue of an event.
     *
     * @remarks
     * Specific to a Program item type.
     *
     */
    venue?: string;
    /**
     * The path to watch this item, if the item is a watchable type, e.g. a `movie`, `program` and `episode`.
     */
    watchPath?: string;
}

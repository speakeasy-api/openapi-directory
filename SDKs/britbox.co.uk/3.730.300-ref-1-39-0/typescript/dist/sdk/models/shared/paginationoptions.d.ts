import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specific item type filter.
 */
export declare enum PaginationOptionsItemTypeEnum {
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
 * The applied sort order if any.
 */
export declare enum PaginationOptionsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The applied sort ordering property if any.
 */
export declare enum PaginationOptionsOrderByEnum {
    AZ = "a-z",
    ReleaseYear = "release-year",
    DateAdded = "date-added"
}
export declare class PaginationOptions extends SpeakeasyBase {
    /**
     * Items filtered by whether they've been fully watched or not.
     *
     * @remarks
     *
     * Only available on the `/account/profile/watched/list` endpoint currently.
     *
     */
    completed?: boolean;
    /**
     * Specific item type filter.
     */
    itemType?: PaginationOptionsItemTypeEnum;
    /**
     * The maximum rating (inclusive) of items returned, e.g. 'AUOFLC-PG'.
     */
    maxRating?: string;
    /**
     * The applied sort order if any.
     */
    order?: PaginationOptionsOrderEnum;
    /**
     * The applied sort ordering property if any.
     */
    orderBy?: PaginationOptionsOrderByEnum;
    /**
     * The number of items to return in a list page.
     */
    pageSize?: number;
}

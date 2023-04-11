import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { User } from "./user";
/**
 * An object containing data for various available formats and sizes of this GIF.
 */
export declare class GifImages extends SpeakeasyBase {
    downsized?: Image;
    downsizedLarge?: Image;
    downsizedMedium?: Image;
    downsizedSmall?: Image;
    downsizedStill?: Image;
    fixedHeight?: Image;
    fixedHeightDownsampled?: Image;
    fixedHeightSmall?: Image;
    fixedHeightSmallStill?: Image;
    fixedHeightStill?: Image;
    fixedWidth?: Image;
    fixedWidthDownsampled?: Image;
    fixedWidthSmall?: Image;
    fixedWidthSmallStill?: Image;
    fixedWidthStill?: Image;
    looping?: Image;
    original?: Image;
    originalStill?: Image;
    preview?: Image;
    previewGif?: Image;
}
/**
 * Type of the gif. By default, this is almost always gif
 */
export declare enum GifTypeEnum {
    Gif = "gif"
}
export declare class Gif extends SpeakeasyBase {
    /**
     * The unique bit.ly URL for this GIF
     */
    bitlyUrl?: string;
    /**
     * Currently unused
     */
    contentUrl?: string;
    /**
     * The date this GIF was added to the GIPHY database.
     */
    createDatetime?: Date;
    /**
     * A URL used for embedding this GIF
     */
    embdedUrl?: string;
    /**
     * An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)
     *
     * @remarks
     *
     */
    featuredTags?: string[];
    /**
     * This GIF's unique ID
     */
    id?: string;
    /**
     * An object containing data for various available formats and sizes of this GIF.
     */
    images?: GifImages;
    /**
     * The creation or upload date from this GIF's source.
     */
    importDatetime?: Date;
    /**
     * The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R
     */
    rating?: string;
    /**
     * The unique slug used in this GIF's URL
     */
    slug?: string;
    /**
     * The page on which this GIF was found
     */
    source?: string;
    /**
     * The URL of the webpage on which this GIF was found.
     */
    sourcePostUrl?: string;
    /**
     * The top level domain of the source URL.
     */
    sourceTld?: string;
    /**
     * An array of tags for this GIF (Note: Not available when using the Public Beta Key)
     *
     * @remarks
     *
     */
    tags?: string[];
    /**
     * The date on which this gif was marked trending, if applicable.
     */
    trendingDatetime?: Date;
    /**
     * Type of the gif. By default, this is almost always gif
     */
    type?: GifTypeEnum;
    /**
     * The date on which this GIF was last updated.
     */
    updateDatetime?: Date;
    /**
     * The unique URL for this GIF
     */
    url?: string;
    /**
     * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
     */
    user?: User;
    /**
     * The username this GIF is attached to, if applicable
     */
    username?: string;
}

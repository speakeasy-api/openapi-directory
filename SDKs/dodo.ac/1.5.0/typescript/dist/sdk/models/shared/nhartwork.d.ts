import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object describing the artwork.
 */
export declare class NHArtwork extends SpeakeasyBase {
    /**
     * The name of the real-life analog to the artwork.
     */
    artName?: string;
    /**
     * The art style of the artwork.
     */
    artStyle?: string;
    /**
     * The description of the difference between real and fake, if there is one
     */
    authenticity?: string;
    /**
     * The author of the real-life analog to the artwork.
     */
    author?: string;
    /**
     * The availability of the artwork.
     */
    availability?: string;
    /**
     * The number of Bells the artwork may be purchased for.
     */
    buy?: number;
    /**
     * The description of the artwork.
     */
    description?: string;
    /**
     * Image of the fake artwork, if it exists.
     */
    fakeImageUrl?: string;
    /**
     * Whether the artwork has a fake or not.
     */
    hasFake?: boolean;
    /**
     * Image of the real artwork. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * The length of the artwork.
     */
    length?: number;
    /**
     * Name of the artwork.
     */
    name?: string;
    /**
     * The number of Bells the artwork can be sold to Nook's store for, when it is genuine.
     */
    sell?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
    /**
     * The width of the artwork.
     */
    width?: number;
    /**
     * The year that the real-life analog was made.
     */
    year?: string;
}

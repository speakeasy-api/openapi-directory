import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Song similarity item.
 */
export declare class APIResponseSimilarityResponseSimilarityList extends SpeakeasyBase {
    /**
     * Artist's song name.
     */
    artistName?: string;
    /**
     * Artist URL.
     */
    artistUrl?: string;
    /**
     * Song internal identifier.
     */
    id?: number;
    /**
     * Index internal identifier.
     */
    indexId?: number;
    /**
     * Song lyrics.
     */
    lyrics?: string;
    /**
     * Similarity percentage.
     */
    percentage?: number;
    /**
     * Song name.
     */
    songName?: string;
    /**
     * Song URL.
     */
    songUrl?: string;
}
/**
 * Contains the response data if the request was successful.
 */
export declare class APIResponseSimilarityResponse extends SpeakeasyBase {
    /**
     * Contains all the similarity items representing songs.
     */
    similarityList?: APIResponseSimilarityResponseSimilarityList[];
}
/**
 * Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
 */
export declare class APIResponseSimilarity extends SpeakeasyBase {
    /**
     * Whether or not the request was successfully processed or not.
     */
    error?: boolean;
    /**
     * Error message if the request was unsuccessful.
     */
    message?: string;
    /**
     * Contains the response data if the request was successful.
     */
    response?: APIResponseSimilarityResponse;
}

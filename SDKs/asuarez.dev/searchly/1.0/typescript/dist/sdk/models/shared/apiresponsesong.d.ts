import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Song item.
 */
export declare class APIResponseSongResponseResults extends SpeakeasyBase {
    /**
     * Song internal identifier.
     */
    id?: number;
    /**
     * Song and Artist name.
     */
    name?: string;
}
/**
 * Contains the response data if the request was successful.
 */
export declare class APIResponseSongResponse extends SpeakeasyBase {
    /**
     * Contains all the songs.
     */
    results?: APIResponseSongResponseResults[];
}
/**
 * Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
 */
export declare class APIResponseSong extends SpeakeasyBase {
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
    response?: APIResponseSongResponse;
}

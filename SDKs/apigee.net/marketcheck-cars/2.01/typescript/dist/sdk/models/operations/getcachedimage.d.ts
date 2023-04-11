import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCachedImageRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * ID of the image to fetch
     */
    imageID: string;
    /**
     * ID of the listing to fetch cached images for
     */
    listingID: string;
}
export declare class GetCachedImageResponse extends SpeakeasyBase {
    /**
     * Cached image of the car
     */
    cacheImageResponse?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

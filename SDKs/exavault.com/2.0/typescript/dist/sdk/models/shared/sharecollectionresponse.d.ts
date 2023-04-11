import { SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
/**
 * Successful operation
 */
export declare class ShareCollectionResponse extends SpeakeasyBase {
    data?: Share[];
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of returned results.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}

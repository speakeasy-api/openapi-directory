import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Response object for collection of resources.
 */
export declare class ResourceCollectionResponse extends SpeakeasyBase {
    data?: Resource[];
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Count of returned results.
     */
    returnedResults?: number;
    /**
     * Total count of results found.
     */
    totalResults?: number;
}

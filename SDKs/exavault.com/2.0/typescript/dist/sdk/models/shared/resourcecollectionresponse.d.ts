import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Response object for collection of resources.
**/
export declare class ResourceCollectionResponse extends SpeakeasyBase {
    data?: Resource[];
    included?: any[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}

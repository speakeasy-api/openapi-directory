import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Response object for resources.
 */
export declare class ResourceResponse extends SpeakeasyBase {
    /**
     * All properties of the resource.
     */
    data?: Resource;
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}

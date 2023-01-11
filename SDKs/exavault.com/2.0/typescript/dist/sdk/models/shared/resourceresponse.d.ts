import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Response object for resources.
**/
export declare class ResourceResponse extends SpeakeasyBase {
    data?: Resource;
    included?: any[];
    responseStatus?: number;
}

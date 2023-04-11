import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * If the action is successful, the service sends back an HTTP 200 response.
 */
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    tags?: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
/**
 * Response object for shares.
 */
export declare class ShareResponse extends SpeakeasyBase {
    /**
     * Object contains share properties.
     */
    data?: Share;
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}

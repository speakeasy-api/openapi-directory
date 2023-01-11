import { SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
/**
 * Response object for shares.
**/
export declare class ShareResponse extends SpeakeasyBase {
    data?: Share;
    included?: any[];
    responseStatus?: number;
}

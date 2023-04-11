import { SpeakeasyBase } from "../../../internal/utils";
import { SessionActivityEntry } from "./sessionactivityentry";
/**
 * Session activity list response
 */
export declare class SessionActivityResponse extends SpeakeasyBase {
    data?: SessionActivityEntry[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
